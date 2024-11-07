import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import Header from './components/Header'
import Footer from './components/Footer'
import Details from './pages/Details'

const App = () => {
  return (
    <BrowserRouter>

      <div className='page'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ürünler' element={<Product />} />
          <Route path='/detay/:id' element={<Details />} />
          <Route path='/kategori' element={<Category />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App