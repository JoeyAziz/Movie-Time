import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api";
import useApiError from "./useApiError";
import { useMessage } from "../context/MessageContext";

export default function useLogin() {
  const { handleApiError } = useApiError();
  const { addMessage } = useMessage();
  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => authApi.login(username, password),
    onError: handleApiError,
    onSuccess: (_, params) => {
      addMessage(`👋 Welcome back @${params.username}!`);
    },
  });
}
