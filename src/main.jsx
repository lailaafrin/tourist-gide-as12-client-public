import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { myRouts } from './routs/routs'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>

  <AuthProvider>
    <Toaster />
      <RouterProvider router={myRouts} />
      </AuthProvider>
      
    </HelmetProvider>
  </React.StrictMode>,
)
