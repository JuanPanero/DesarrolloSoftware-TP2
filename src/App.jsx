import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import BalanceTotal from './components/BalanceTotal'

function App() {
  const [movimientos, setMovimientos] = useState([])

  const agregarMovimientos = (nuevo) => setMovimientos([...movimientos, nuevo])

  const eliminarMovimiento = (movEliminar) => {
    setMovimientos(movimientos.filter((m)=>m.id!==movEliminar.id))
  }
  
  return (
      <div className='contenedorApp'>
        <Formulario className='formulario' agregarMov={agregarMovimientos}/>
        <div className='contenedorInfo'>
          <BalanceTotal movimientos={movimientos}/>
          <Listado movimientos={movimientos} eliminar={eliminarMovimiento}/>
        </div>
      </div>
  )
}

export default App
