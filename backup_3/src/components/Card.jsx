import React from 'react'
import Buttons from './Buttons'

const Card = ({postData,like,dislike}) => {
  return (
     <div className='flex gap-5' >
        {postData.map((post)=>(
        
        <div key={post.id} className='card flex py-4 items-center flex-col w-70 h-70 rounded-md bg-zinc-100'>
        <img className='h-25 w-25 rounded-full ' src={post.profileImage} alt="" />
        <h1 className='text-xl'>{post.userName}</h1>
        <p>{post.description}</p>
        <p>Like Count : {post.likeCount}</p>
       <Buttons like={()=>like(post.id)} dislike={dislike}/>
      </div>
        ))}
        
     </div>
  )
}

export default Card