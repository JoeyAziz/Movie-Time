import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import { MessageProvider } from "./context/MessageContext";
import Message from "./components/Message";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/:movieId/details",
      element: <MovieDetails />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <MessageProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Message />
        </AuthProvider>
      </MessageProvider>
    </QueryClientProvider>
  );
};

export default App;
