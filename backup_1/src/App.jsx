import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  
  const [postData, setpostData] = useState([{
      id: 1,
      userName: "Ritik Rajput",
      description: "Learning Props Drilling 🔥",
      profileImage: "https://i.pravatar.cc/150?img=3",
      likeCount:0,
    },
    {
      id: 2,
      userName: "Vatsal Dubey",
      description: "Learning Props Drilling 🔥",
      profileImage: "https://i.pravatar.cc/150?img=3",
      likeCount: 0,
    }
  ])

  const like = (id)=>{
    setpostData((prev)=> prev.map((post)=>post.id===id ? {...post,likeCount:post.likeCount+1}:post))
  }
 
    const dislike = (id)=>{
      setpostData((prev)=>prev.map((post)=> post.id===id ? {...post,likeCount:post.likeCount>0 ? post.likeCount-1:0}:post))
    }
    

  return (
   <div className="w-full h-screen bg-amber-50 p-20"> 
    <Card postData={postData} like={like} dislike={dislike}  />
    </div>
  )
}

export default App