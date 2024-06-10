import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api";
import useApiError from "./useApiError";
import { useMessage } from "./useMessage";

export default function useLogout() {
  const { handleApiError } = useApiError();
  const { addMessage } = useMessage();
  return useMutation({
    mutationFn: authApi.logout,
    onError: handleApiError,
    onSuccess: () => {
      addMessage(`👋 See you later !`);
    },
  });
}
