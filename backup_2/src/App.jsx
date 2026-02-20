import React, { useState } from 'react'

const App = () => {

const [a, seta] = useState(0)
 
const increment = ()=>{
  seta(a+1)
  seta(a+1)
}

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={increment}>increment</button>
    
    </div>
  )
}

export default App