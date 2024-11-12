import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import Header from './components/Header'
import Footer from './components/Footer'
import Details from './pages/Details'
import Undefined from './pages/Undefined'

const App = () => {
  return (
    <BrowserRouter>

      <div className='page'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ürünler' element={<Product />} />
          <Route path='/detay/:id' element={<Details />} />

          <Route path='/kategori' element={<Category />}>
            <Route path='hikaye' element={<h1>Hikaye</h1>} />
            <Route path='roman' element={<h1>Roman</h1>} />
          </Route>

          {/* Undefiend */}
          <Route path='*' element={<Undefined />} />

        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App