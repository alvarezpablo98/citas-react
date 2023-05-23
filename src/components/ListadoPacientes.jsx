import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        {pacientes && pacientes.length ? (
          <>
          
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="mt-05 text-xl mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
        
            {pacientes.map( paciente  => (
              
              <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            
          )) }

          </>
        ) : (
          <>
              <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
              <p className="mt-05 text-xl mb-10 text-center">
                  Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
              </p>

          </>
        )}
        
    </div>
  )
}

export default ListadoPacientes

