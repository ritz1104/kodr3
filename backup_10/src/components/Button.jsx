import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Button = () => {

  const {changeTheme} =  useContext(ThemeContextData)
    console.log(changeTheme)
 
  return (
    <div>
      <button onClick={changeTheme} >Change theme</button>
    </div>
  )
}

export default Button
