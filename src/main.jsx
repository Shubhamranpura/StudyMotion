import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/index.js'
import { Toaster } from 'react-hot-toast'
import Dashboard from './Dashboard/Dashboard.jsx'
import { initializeAuth } from './slice/authslice.js'

const store = configureStore({
  reducer: rootReducer
})

// Initialize auth state
store.dispatch(initializeAuth())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <Toaster/>
  </StrictMode>
)
