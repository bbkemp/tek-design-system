const COHERE_MODEL = process.env.COHERE_MODEL ?? "rerank-v3.5";

interface CohereRerankResponse {
  results: { index: number; relevance_score: number }[];
}

/**
 * Rerank documents for a query. Returns null on ANY failure (missing key,
 * rate limit, outage) — callers fall back to their pre-rerank order, so
 * Cohere can dull the ranking but never take a search down.
 */
export async function rerank(
  query: string,
  documents: string[],
  topN: number,
): Promise<{ index: number; score: number }[] | null> {
  const key = process.env.COHERE_API_KEY;
  if (!key || documents.length === 0) return null;
  try {
    const res = await fetch("https://api.cohere.com/v2/rerank", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: COHERE_MODEL, query, documents, top_n: topN }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as CohereRerankResponse;
    return json.results.map((r) => ({ index: r.index, score: r.relevance_score }));
  } catch {
    return null;
  }
}
