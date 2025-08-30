import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'
import ForgetPassword from './pages/ForgetPassword'


const App = () => {


  const notgo = ["/login", "/signup"]
  const userdata = useSelector((state) => state.user.user);

 const location =  useLocation()

  return (
    <>
      { !["/login", "/signup","/forget"].includes(location.pathname) && <Navbar />
      
        
      }
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={ !userdata ? <Signup /> : <Navigate to={"/"} /> } />
        <Route path="/profile" element={ userdata ? <Profile /> : <Navigate to={"/signup"} /> } />
        <Route path="/forget" element={ !userdata ? <ForgetPassword /> : <Navigate to={"/login"} /> } />


      </Routes>
    
    </>
  )
}

export default App
