import React from 'react'
import NavBar from './components/NavBar'
import IntemListContainer from './components/IntemListContainer'



const App = () => {
  return (
    <div>
      <NavBar />
      <IntemListContainer greeting={"Bienvenido"}/>

    </div>
  )
}

export default App
