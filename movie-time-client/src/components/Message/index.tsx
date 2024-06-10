import React, { useEffect } from "react";
import { MessageType, useMessage } from "../../context/MessageContext";

const Message: React.FC = () => {
  const { messages, removeMessage } = useMessage();

  const messageTypeIcon: Record<MessageType, React.ReactNode> = {
    success: "✅",
    error: "❌",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length) {
        removeMessage(messages[0].id);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [messages, removeMessage]);

  return (
    <div className="fixed top-0 right-0 flex flex-col m-4 space-y-2">
      {messages.map((message) => (
        <div key={message.id} className="p-4 text-white bg-gray-800 rounded shadow-lg">
          <div className="flex items-center gap-2">
            {message.messageType && messageTypeIcon[message.messageType]}
            {message.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
