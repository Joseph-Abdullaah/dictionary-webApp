export async function getWord(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw body
  }

  return res.json()
}
