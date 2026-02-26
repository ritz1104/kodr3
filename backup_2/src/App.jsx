import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

const changeVal = ()=>{
  setnum((prev)=>prev+1);
  setnum((prev)=>prev+2);
  setnum((prev)=>prev+3);


}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeVal}>Change</button>
      </div>
  )
}

export default App
