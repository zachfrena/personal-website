import React from 'react'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Products from './components/pages/Products'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'



function App () {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/services' element={<Services />}/>
        <Route exact path='/sign-up' element={<SignUp />}/>
        <Route exact path='/products' element={<Products />}/>
      </Routes>
    </Router>
    </BrowserRouter>
  )
}

export default App
