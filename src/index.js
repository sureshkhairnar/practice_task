import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { PostProvider } from './components/postContext'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>,
)
