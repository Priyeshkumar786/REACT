import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Register from './Register'
import Login from './Login'

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

export default App