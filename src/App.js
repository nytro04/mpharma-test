import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/main.scss'
import Navbar from './components/Navbar'
import ProductList from './components/products/ProductList'
import ProductCreate from './components/products/ProductCreate'
import ProductEdit from './components/products/ProductEdit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/products/new' component={ProductCreate} />
          <Route exact path='/products/edit/:id' component={ProductEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
