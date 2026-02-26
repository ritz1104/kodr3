import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [age,setAge] = useState('')

  const [post, setpost] = useState([])

  
  const submitHandler = (e)=>{
    e.preventDefault();

   const newPost = [...post]
   newPost.push({name,age})
   console.log(newPost);
    setpost(newPost)
   setName('')
   setAge('')
  }

  const deleteHandler = (idx)=>{
    console.log(idx)
    const deletePost = [...post]

    deletePost.splice(idx,1)
    setpost(deletePost)

  }
  return (
    <div className='p-20'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} className='border-1 px-8 py-2' type="text" placeholder='enter your name' />
        <input value={age} onChange={(e)=>{
          setAge(e.target.value)
        }} className='border-1 px-8 ml-2 py-2' type="number" placeholder='enter your age' />
        <input className='border-1  px-8 py-2 ml-2' type="submit" />
      </form>
      <div className='flex gap-10'>
        {post.map((elem,idx)=>(
          
      <div key={idx} className='card w-60 flex flex-col justify-center items-center  h-60 bg-yellow-100 mt-20 rounded-lg'>
        <h1>Name : {elem.name}</h1>
        <h3>Age : {elem.age}</h3>
        <button onClick={()=>deleteHandler(idx)} className='bg-red-400 px-8 py-2 mt-2'>Delete</button>
      </div>
        ))}
      </div>
    </div>
  )
}

export default App