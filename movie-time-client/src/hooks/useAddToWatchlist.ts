import { useMutation, useQueryClient } from "@tanstack/react-query";
import { moviesApi } from "../api";
import { useMessage } from "./useMessage";

export function useAddToWatchlist(movieId: string) {
  const queryClient = useQueryClient();
  const { addMessage } = useMessage();

  return useMutation({
    mutationFn: () => moviesApi.addToWatchlist(movieId),
    onSuccess: () => {
      addMessage("Added movie to your watch list", "success");
      queryClient.invalidateQueries({ queryKey: ["movie", movieId] });
    },
  });
}
