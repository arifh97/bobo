import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nfts from './pages/Nfts'
import Ordinals from './pages/Ordinals'


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/nfts' element={<Nfts />}></Route>
          <Route path='/ordinals' element={<Ordinals />}></Route>
        </Routes>
      <Footer />      
    </>
  )
}

export default App
