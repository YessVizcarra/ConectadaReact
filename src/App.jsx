import ListadoPaciente from "./componentes/listadopaciente"
import Header from "./componentes/header"
import Formulario from "./componentes/formulario"
/**import Error from "./componentes/error"*/
/*import Paciente from "./componentes/paciente"*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente]= useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes={pacientesActualizados}
  }
 
  return (
    <div className="container mx-auto mt-15">
    <Header/>
    <div className="md:flex">
      <Formulario 
      pacientes={pacientes} setPacientes={setPacientes}
      paciente={paciente} setPaciente={setPaciente}/>
      <ListadoPaciente
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente ={eliminarPaciente}/>
    </div>

</div>
  )
}

export default App
