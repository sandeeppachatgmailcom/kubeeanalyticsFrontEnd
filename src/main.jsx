import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './router/router.jsx'
import { Provider } from 'react-redux'
import appStore from './store/appStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ appStore} >
    <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
