import React, { createContext, useState } from 'react'


export  const ThemeContextData = createContext()

const ThemeContext = (props) => {
    
    const [theme, setTheme] = useState('light')

    const changeTheme = ()=>{
      setTheme((prev)=> prev === 'light' ? 'dark':'light')
    }

  return (
   <ThemeContextData.Provider value={{theme,changeTheme}}>
        {props.children}
   </ThemeContextData.Provider>
  )
}

export default ThemeContext
