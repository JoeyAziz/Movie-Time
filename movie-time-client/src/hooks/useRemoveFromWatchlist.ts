import { useMutation, useQueryClient } from "@tanstack/react-query";
import { moviesApi } from "../api";
import { useMessage } from "./useMessage";

export function useRemoveFromWatchlist(movieId: string) {
  const queryClient = useQueryClient();
  const { addMessage } = useMessage();

  return useMutation({
    mutationFn: () => moviesApi.removeFromWatchlist(movieId),
    onSuccess: () => {
      addMessage("Removed movie from your watch list", "success");
      queryClient.invalidateQueries({ queryKey: ["movie", movieId] });
    },
  });
}
