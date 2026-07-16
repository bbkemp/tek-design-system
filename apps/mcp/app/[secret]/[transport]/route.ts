import { timingSafeEqual } from "node:crypto";
import { createMcpHandler } from "mcp-handler";
import { registerTools, SERVER_NAME, SERVER_VERSION } from "../../../lib/tools";

export const runtime = "nodejs";
export const maxDuration = 60;

function secretMatches(candidate: string, expected: string): boolean {
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function buildHandler(secret: string) {
  return createMcpHandler(
    registerTools,
    {
      serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
    },
    {
      basePath: `/${secret}`,
      maxDuration,
      disableSse: true,
      verboseLogs: false,
    },
  );
}

async function handle(
  request: Request,
  { params }: { params: Promise<{ secret: string; transport: string }> },
): Promise<Response> {
  const { secret, transport } = await params;
  const expected = process.env.MCP_PATH_SECRET;

  // Fail closed: no configured secret means no access, and a wrong or
  // missing path segment is indistinguishable from a nonexistent route.
  if (!expected || !secretMatches(secret, expected)) {
    return new Response("Not found", { status: 404 });
  }

  // Streamable HTTP only — SSE resumability needs Redis we don't run.
  if (transport !== "mcp") {
    return new Response("Not found", { status: 404 });
  }

  return buildHandler(secret)(request);
}

export { handle as GET, handle as POST, handle as DELETE };
