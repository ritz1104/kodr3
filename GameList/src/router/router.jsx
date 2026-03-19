import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/HomePage'
import App from '../App'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import Games from '../pages/Games'
import Favourite from '../pages/Favourite'
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'games',
                element:<Games/>
            },
            {
                path:'favourite',
                element:<Favourite/>
            }
        ]
        
    }
])


export default router