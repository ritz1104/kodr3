import React from 'react'

const Buttons = ({like,dislike}) => {
  return (
    <div className='flex gap-5 mt-5'>
          <button onClick={like} className='py-2 px-8 bg-blue-500 rounded-md text-white'>Like</button>
          <button onClick={dislike} className='py-2 px-8 bg-red-500 rounded-md text-white'>DisLike</button>
        </div>
  )
}

export default Buttons