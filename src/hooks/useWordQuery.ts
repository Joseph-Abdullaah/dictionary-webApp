import { useQuery } from "@tanstack/react-query";
import { getWord } from "@/api/dictionary";

export function useWordQuery(word: string) {
    return useQuery({
        queryKey: ["word", word],
        queryFn: () => getWord(word),
        enabled: !!word,
        retry: false,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: true
    })
}
