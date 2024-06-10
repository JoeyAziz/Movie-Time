import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import { MessageProvider } from "./context/MessageContext";
import Message from "./components/Message";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MessageProvider>
        <AuthProvider>
          <Landing />
          <Message />
        </AuthProvider>
      </MessageProvider>
    </QueryClientProvider>
  );
};

export default App;
