import { useState } from 'react'

import Home from '@/pages/Home';
import Auth from '@/pages/Auth';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}



