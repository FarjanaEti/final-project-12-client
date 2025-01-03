import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Rout/router.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient= new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider> 
  <QueryClientProvider client={queryClient}>
     <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
      </HelmetProvider>  
    </QueryClientProvider>
  </AuthProvider>
</StrictMode>,
)