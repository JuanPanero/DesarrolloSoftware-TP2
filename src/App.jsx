import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Balance from './components/Balance'

function App() {
  const [movimientos, setMovimientos] = useState([])

  const agregarMovimientos = (nuevo) => setMovimientos([...movimientos, nuevo])

  const eliminarMovimiento = (movEliminar) => {
    setMovimientos(movimientos.filter((m)=>m.id!==movEliminar.id))
  }

  const actualizarMovimiento = (movEditado) =>{
    setMovimientos(movimientos.map((m)=> m.id === movEditado.id ? movEditado : m))
  }

  return (
      <div className='contenedorApp'>
        <Formulario className='formulario' agregarMov={agregarMovimientos}/>
        <div className='contenedorInfo'>
          <Balance className='contenedor-balance' movimientos={movimientos}/>
          <Listado movimientos={movimientos} eliminar={eliminarMovimiento} actualizar={actualizarMovimiento} className='contenedor-listado'/>
        </div>
      </div>
  )
}

export default App
