export async function getWord(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )
  if (!res.ok) throw new Error("Word not found")

  return res.json()
}
