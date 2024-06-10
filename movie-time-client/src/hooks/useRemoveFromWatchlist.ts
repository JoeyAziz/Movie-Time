import { useMutation, useQueryClient } from "@tanstack/react-query";
import { moviesApi } from "../api";

export function useRemoveFromWatchlist(movieId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => moviesApi.removeFromWatchlist(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movie", movieId] });
    },
  });
}
