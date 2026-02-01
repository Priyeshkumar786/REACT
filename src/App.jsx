<<<<<<< HEAD
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Register from './Register'
import Login from './Login'
=======
import React from "react"
// import Navbar from "./Navbar"
// import Footer from "./Footer"
import UserContext from "./Hook"
// import Hook from "./Hook"
>>>>>>> 3613ce4ea9520932a280f3fcdfc42df59f855fb7

// here we can import bits for targetting the whole page
function App() {
  

  return (
    <>
       <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
 
        </Route>
        
    </Routes>
    </>
  )
}

<<<<<<< HEAD
export default App
=======

>>>>>>> 3613ce4ea9520932a280f3fcdfc42df59f855fb7
