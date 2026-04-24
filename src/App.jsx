import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Balance from './components/Balance'
import Presupuesto from './components/Presupuesto'

function App() {
  const [movimientos, setMovimientos] = useState(()=>{
    const datosGuardados = localStorage.getItem('movimientos')
    return datosGuardados ? JSON.parse(datosGuardados) : [] 
  })
  const [filtro, setFiltro] = useState('todos')
  const [orden, setOrden] = useState('fecha') 

  const agregarMovimientos = (nuevo) => {
    setMovimientos([...movimientos, nuevo])
  }
  const eliminarMovimiento = (movEliminar) => {
    setMovimientos(movimientos.filter((m)=>m.id!==movEliminar.id))
  }

  const actualizarMovimiento = (movEditado) =>{
    setMovimientos(movimientos.map((m)=> m.id === movEditado.id ? movEditado : m))
  }

  useEffect(() => {
    localStorage.setItem('movimientos', JSON.stringify(movimientos));
  }, [movimientos]);

  const movFiltrados = movimientos.filter(mov=>{
    if(filtro === 'todos') return true

    return mov.categoria === filtro
  })

  const movOrdenados = movFiltrados.sort((a,b)=>{
    if(orden === 'fechaAsc'){
      return new Date(a.fecha) - new Date(b.fecha)
    } else if (orden === 'fechaDes'){
      return new Date(b.fecha) - new Date(a.fecha)
    }else if (orden === 'montoAsc'){
      return a.monto - b.monto
    }
    return b.monto - a.monto
  })

  return (
      <div className='contenedor-app'>
        <div className='columna-izq'>
          <Presupuesto movimientos={movimientos}/>
          <Formulario className='formulario' agregarMov={agregarMovimientos}/>
        </div>
        <div className='contenedor-info'>
          <Balance className='contenedor-balance' movimientos={movimientos}/>
          <Listado 
            movimientos={movOrdenados}
            filtro={filtro}
            setFiltro={setFiltro}
            orden={orden}
            setOrden={setOrden}
            eliminar={eliminarMovimiento}
            actualizar={actualizarMovimiento}
            className='contenedor-listado'
          />
        </div>
      </div>
  )
}

export default App
