import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full bg-cyan-500 flex justify-between px-8 py-4 text-black'>
       <h1>Kodr</h1>
       <div className='flex gap-20'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
       </div>
        </div>
  )
}

export default NavBar