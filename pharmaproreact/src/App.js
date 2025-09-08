import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Products from './pages/Products'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import TStock from './pages/TStock'
import Compensation from './pages/Compensation'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/sign-in' element={<SignInPage />} />
        <Route exact path='/sign-up' element={<SignUpPage />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/tstock' element={<TStock />} />
        <Route path='/compensation' element={<Compensation />} />
      </Routes>
    </Router>
  )
}

export default App
