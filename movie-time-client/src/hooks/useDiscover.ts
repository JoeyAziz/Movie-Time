import { useQuery } from "@tanstack/react-query";
import { movieTimeApi } from "../api";

export default function useDiscover() {
  return useQuery( {
    queryKey: ["discover"],
    queryFn: movieTimeApi.discover, 
    refetchOnWindowFocus: false,

  });
}