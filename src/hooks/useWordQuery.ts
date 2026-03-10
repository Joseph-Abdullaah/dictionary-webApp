import { useQuery } from "@tanstack/react-query";
import { getWord } from "@/api/dictionary";

export function useWordQuery(word: string) {
    return useQuery({
        queryKey: ["word", word],
        queryFn: () => getWord(word),
        enabled: !!word
    })
}
