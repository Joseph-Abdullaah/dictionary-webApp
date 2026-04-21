import { useQuery } from "@tanstack/react-query"
import { getWord } from "@/api/dictionary"
import type { DictionaryApiError, RawEntry } from "@/types/formatDataTypes"

export function useWordQuery(word: string) {
  return useQuery<RawEntry[], DictionaryApiError>({
    queryKey: ["word", word],
    queryFn: () => getWord(word),
    enabled: word.trim().length > 0,
    retry: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
  })
}
