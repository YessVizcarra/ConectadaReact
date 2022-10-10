import LISTADOPACIENTE from "./componentes/listadopaciente"
import Header from "./componentes/header"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <LISTADOPACIENTE></LISTADOPACIENTE>
    </>
  )
}

export default App
