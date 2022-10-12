import ListadoPaciente from "./componentes/listadopaciente"
import Header from "./componentes/header"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Paciente from "./componentes/paciente"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <ListadoPaciente></ListadoPaciente>
     <Formulario></Formulario>
     <Error></Error>
     <Paciente></Paciente>
    </>
  )
}

export default App
