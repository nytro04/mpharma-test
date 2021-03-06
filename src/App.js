import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/main.scss'
import Navbar from './components/Navbar'
import ProductList from './components/products/ProductList'
import ProductCreate from './components/products/ProductCreate'
// import ProductEdit from './components/products/ProductEdit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='row'>
          <div className='col-md-5'>
            <ProductCreate />
          </div>
          <div className='col-md-7'>
            <ProductList />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
