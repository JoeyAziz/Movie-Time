import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api";
import useApiError from "./useApiError";
import { useMessage } from "./useMessage";

export default function useSignup() {
  const { handleApiError } = useApiError();
  const { addMessage } = useMessage();

  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => authApi.signup(username, password),
    onError: handleApiError,
    onSuccess: (_, params) => {
      addMessage(`It's great to have you @${params.username}!`);
    },
  });
}
