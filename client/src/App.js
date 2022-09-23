import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Cart from './pages/Cart'
import Description from './pages/Description'
// import Login from './components/Login.jsx'
import Home from "./pages/Home"
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<Description />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App