import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailProduct from './pages/DetailProduct'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Login from './pages/Login'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/product' component={DetailProduct} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  )
}

export default App
