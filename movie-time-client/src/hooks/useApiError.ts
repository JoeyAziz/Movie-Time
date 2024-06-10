import { AxiosError } from "axios";
import { useMessage } from "./useMessage";

export const useApiError = () => {
  const { addMessage } = useMessage();

  const handleApiError = (err?: AxiosError<{ message: string }>) => {
    if (err?.response?.data?.message) {
      addMessage(err.response?.data?.message, "error");
    }
  };
  return {
    handleApiError,
  };
};

export default useApiError;
