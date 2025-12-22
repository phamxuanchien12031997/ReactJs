import { Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react'
import Login from './component/Login';
import Home from './component/Home';
import Product from './component/Product';
import User from './component/User';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  )
}

export default App
