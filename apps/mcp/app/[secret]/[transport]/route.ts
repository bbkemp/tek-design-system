import { timingSafeEqual } from "node:crypto";
import { createMcpHandler } from "mcp-handler";

export const runtime = "nodejs";
export const maxDuration = 60;

const SERVER_NAME = "tek-mcp-endpoint";
const SERVER_VERSION = "0.1.0";

function secretMatches(candidate: string, expected: string): boolean {
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function buildHandler(secret: string) {
  return createMcpHandler(
    (server) => {
      server.tool(
        "server_info",
        "Report the Tek MCP Endpoint's status, version, and which tool surfaces are live. Use to verify connectivity.",
        {},
        async () => ({
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(
                {
                  name: SERVER_NAME,
                  version: SERVER_VERSION,
                  phase: "P0 scaffold",
                  surfaces: {
                    tokens: "planned",
                    components: "planned",
                    corpus: "planned",
                  },
                  plan: "docs/mcp-server-plan.md in bbkemp/tek-design-system",
                },
                null,
                2,
              ),
            },
          ],
        }),
      );
    },
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
