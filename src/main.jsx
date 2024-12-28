import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'

export const Context = createContext({ isAuthanticated: false })


const AppWrapper = () => {
  const [isAuthanticated, setIsAuthanticated] = useState(false)
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthanticated, setIsAuthanticated, user, setUser }}>
      <App />
    </Context.Provider>

  )

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
