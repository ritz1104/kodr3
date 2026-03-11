import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import NotFound from './NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <div className='w-full h-screen  bg-black text-white'>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}>
       <Route path='men' element={<Men/>}/>
       <Route path='women' element={<Women/>}/>
      </Route>
      
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    <Route path='/productDetails/:product_id' element={<ProductDetails/>} />
      <Route path='*' element={<NotFound/>} />

      </Routes>
      <Footer/>

    </div>

  )
}

export default App