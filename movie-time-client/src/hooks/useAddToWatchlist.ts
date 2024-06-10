import { useMutation, useQueryClient } from "@tanstack/react-query";
import { moviesApi } from "../api";

export function useAddToWatchlist(movieId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => moviesApi.addToWatchlist(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movie", movieId] });
    },
  });
}
