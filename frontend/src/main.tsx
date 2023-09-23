import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

const queryClient = new QueryClient({
  // desable retry on fail
  defaultOptions: { queries: { retry: false } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
)
