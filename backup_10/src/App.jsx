import React, { useContext } from 'react'
import { ThemeContextData } from './context/ThemeContext'
import Button from './components/Button'

const App = () => {

  const {theme} = useContext(ThemeContextData)
 
  return (
    <div className={theme==='light'?'light':'dark'}>
    <h1>{theme}</h1>
      <Button/>
    </div>
  ) 
}

export default App
