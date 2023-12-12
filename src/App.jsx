import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemCount from './components/ItemCount'
import Item from './components/Item'
import ItemDetail from './components/ItemDetail'
import ShoppingCartContext from './context/ShoppingCartContext'
import CartWidget from './components/CartWidget'

const App = () => {
  return (
    <div>
      <ShoppingCartContext>

        <BrowserRouter>
          <NavBar />

          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/CartWidget' element={<CartWidget/>}/>

          </Routes>



        </BrowserRouter>
      </ShoppingCartContext>





    </div>
  )
}

export default App
