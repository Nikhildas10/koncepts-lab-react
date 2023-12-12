import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SignupLogin from './pages/Signup_Login'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Cart from './pages/Cart'

const App = () => {
const location=useLocation()
    const isSignupPage = location.pathname === "/";

  return (
    <div>
      {!isSignupPage && <Header></Header>}

      <Routes>
        <Route path="/" element={<SignupLogin></SignupLogin>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      {!isSignupPage && <Footer></Footer>}
    </div>
  );
}

export default App