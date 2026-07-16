const VOYAGE_MODEL = process.env.VOYAGE_MODEL ?? "voyage-3.5";
const EMBEDDING_DIMS = 1024;

interface VoyageResponse {
  data: { embedding: number[] }[];
}

/** Embed a search query (input_type "query" pairs with the ingested "document" vectors). */
export async function embedQuery(text: string): Promise<number[]> {
  const key = process.env.VOYAGE_API_KEY;
  if (!key) throw new Error("VOYAGE_API_KEY is not configured on the server");
  const res = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({ model: VOYAGE_MODEL, input: [text], input_type: "query", output_dimension: EMBEDDING_DIMS }),
  });
  if (!res.ok) throw new Error(`Voyage API ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as VoyageResponse;
  return json.data[0].embedding;
}
