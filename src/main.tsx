import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

export interface DataInterface {
  [key: string]: string
}

const data = {
  "France": "Paris",
  "Germany": "Berlin",
  "Italy": "Rome",
  "Spain": "Madrid",
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)
