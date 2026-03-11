import React from 'react'
import Men from './Men'
import { Outlet,Link, useNavigate } from 'react-router-dom'
const Product = () => {

   const navigate = useNavigate()

  return (
    <div className='w-full relative h-[76%] flex '
    >

        <button onClick={()=> navigate('/')} className=' absolute top-2 left-2 rounded-md px-10 bg-green-500 py-4'>return to Home</button>
        <button onClick={()=> navigate(-1)} className=' absolute top-20 left-2 rounded-md px-10 bg-green-500 py-4'>Back</button>
        <button onClick={()=> navigate(+1)} className=' absolute top-40 left-2 rounded-md px-10 bg-green-500 py-4'>Next</button>
        <div className=' absolute left-1/2 flex gap-5'>
            <Link to='/products/men'>Men</Link>
            <Link to='/products/women'>Women</Link>
        </div>
    <h1  className='absolute top-1/2 left-1/2 text-2xl'>Products</h1>
       <Outlet/>

    
    </div>
  )
}

export default Product