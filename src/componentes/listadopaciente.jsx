import Paciente from "./paciente"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {
  
    return (
      <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll  md:h-screen">
        <h2 className="font-black text-3xl text-center ">lista de pacientes</h2>
        <p className="text-xl text-center mt-5 mb-10">
          Administra tus <span className="text-indigo-600 font-bold ">Pacientes y Citas</span></p>
         {pacientes.length > 0 ? pacientes.map(paciente =>(
          <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}/>

          )): (
        <div>
           <h2 className="font-black text-center text-2xl">No hay pacientes</h2>
         <p className="text-center text-xl mt-5">Comienza agregando pacientes <span className="font-bold text-indigo-600"> Y aparecerán en este lugar</span></p>
        </div>
          )}
      
      </div>
    )
  }
  
  export default ListadoPacientes;
  