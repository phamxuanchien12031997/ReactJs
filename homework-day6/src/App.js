import Home from './Home/Home.js'
import Login from './Login/Login.js'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProductDetail from './ProductDetail/ProductDetail.js'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
