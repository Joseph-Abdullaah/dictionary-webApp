import type { DictionaryApiError, RawEntry } from "@/types/formatDataTypes"

function buildDictionaryApiError(body: unknown): DictionaryApiError {
  const fallback: DictionaryApiError = {
    title: "Word not found",
    message: "We couldn't find that word.",
    resolution: "Try another word or check your spelling.",
  }

  if (!body || typeof body !== "object") return fallback

  const payload = body as Record<string, unknown>

  return {
    title: typeof payload.title === "string" ? payload.title : fallback.title,
    message: typeof payload.message === "string" ? payload.message : fallback.message,
    resolution:
      typeof payload.resolution === "string" ? payload.resolution : fallback.resolution,
  }
}

export async function getWord(word: string): Promise<RawEntry[]> {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
  )

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw buildDictionaryApiError(body)
  }

  const body: unknown = await res.json()
  return Array.isArray(body) ? (body as RawEntry[]) : []
}
