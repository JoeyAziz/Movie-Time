import { AxiosError } from "axios";
import { useMessage } from "../context/MessageContext";

export const useApiError = () => {
  const { addMessage } = useMessage();

  const handleApiError = (err?: AxiosError) => {
    if (err?.message) {
      addMessage(err.message, "error");
    }
  };
  return {
    handleApiError,
  };
};

export default useApiError;
