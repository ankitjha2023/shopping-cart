import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Products from './components/Products'
import "./App.css"
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Home from './components/Home'
const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
