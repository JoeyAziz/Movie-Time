import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within an MessageProvider");
  }
  return context;
};
