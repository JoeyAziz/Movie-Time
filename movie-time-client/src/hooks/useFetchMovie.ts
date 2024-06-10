import { useQuery } from "@tanstack/react-query";
import { moviesApi } from "../api";

export default function useFetchMovie(movieId: string) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => moviesApi.fetchDetails(movieId),
    refetchOnWindowFocus: false,
  });
}
