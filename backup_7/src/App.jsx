import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { NavBar } from './pages/NavBar'
import MainLayout from './layout/MainLayout'
import Params from './pages/Params'
import NotFoundPage from './pages/NotFoundPage'
const App = () => {

  const router = createBrowserRouter([
   {
    path:'/',
    element:<MainLayout/>,
     children:[
      {
        index:true,
        element:<Home/>,
        
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'student/:id',
        element:<Params/>
      }
    ]
    
   },
   {
        path:'*',
        element:<NotFoundPage/>
      }
   
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
