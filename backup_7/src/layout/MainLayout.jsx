import React from 'react'
import { NavBar } from '../pages/NavBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default MainLayout
