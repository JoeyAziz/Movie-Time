import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Landing from './pages/Landing'

const App : React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Landing />
    </QueryClientProvider >
  )
}

export default App