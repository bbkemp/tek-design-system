import { neon } from "@neondatabase/serverless";

export type Row = Record<string, unknown>;
export type Sql = (strings: TemplateStringsArray, ...params: unknown[]) => Promise<Row[]>;

export function db(): Sql {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not configured on the server");
  // neon()'s tagged template resolves to row arrays for plain queries; the
  // union type it declares (arrays mode, full results) never applies here.
  return neon(url) as unknown as Sql;
}
