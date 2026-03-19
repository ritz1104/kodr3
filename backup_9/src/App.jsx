import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData, setuserData] = useState([])
  const [page,setPage] = useState(1)
  const getData = async ()=>{
   try {
    const api_key = 'ec81cd95eecd4503b6a93d6001c82694'
    const response =  await axios.get(`https://api.rawg.io/api/platforms?key=${api_key}`,{
      params:{
        page:page,
        page_size:10
      }
    })

   setuserData(response.data.results)
   console.log(response.data.results)
   } catch (error) {
    console.log(error.message)
   }
  }

  useEffect(()=>{
    getData();
  },[page])
  
  return (
   <div className='w-full h-screen bg-black text-white'>
    <div className='Navbar w-full backdrop:2xl: border-b border-gray-600 flex items-center justify-between p-4'>
    <h1><span></span>GameList</h1>
    <div >
      <a className='hover:underline' href="">Home</a>
      <a href="">Game</a>
      <a href="">Favorites</a>
    </div>
    <div className='flex gap-2 '>
      <div className='bg-zinc-800'>
        <input className='' type="text" placeholder="Search games..." />
      </div>
      <h3>profile</h3>
    </div>
    </div>  

   </div>
  )
}

export default App
