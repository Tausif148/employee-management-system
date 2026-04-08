import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import router from './router/index'

import AuthProvider from './context/AuthProvider';
import DataProvider from './context/DataProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode >,
)
