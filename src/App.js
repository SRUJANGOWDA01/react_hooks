import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu'
import ContainerComp from './pages/container'


function App() {
  return (
      <BrowserRouter>
         <Menu/>
         <ContainerComp/>
      </BrowserRouter>
  )
}

export default App