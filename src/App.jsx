import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Balance from './components/Balance'
import Presupuesto from './components/Presupuesto'

function App() {
  const [movimientos, setMovimientos] = useState(()=>{
    try {
      const datosGuardados = localStorage.getItem('movimientos');
      return datosGuardados ? JSON.parse(datosGuardados) : [];
    } catch (error) {
      console.error("Error al cargar movimientos:", error);
      return [];
    }
  })
  const [filtro, setFiltro] = useState('todos')
  const [orden, setOrden] = useState('fecha')
  const categorias = ['comida', 'salario', 'transporte', 'ocio', 'servicios', 'salud', 'educación', 'otros'] 

  const agregarMovimiento = (nuevo) => setMovimientos([...movimientos, nuevo])
  
  const eliminarMovimiento = (movEliminar) => {
    setMovimientos(movimientos.filter((m)=>m.id!==movEliminar.id))
  }

  const editarMovimiento = (movEditado) =>{
    setMovimientos(movimientos.map((m)=> m.id === movEditado.id ? movEditado : m))
  }

  useEffect(() => {
    localStorage.setItem('movimientos', JSON.stringify(movimientos));
  }, [movimientos]);

  const movFiltrados = movimientos.filter(mov=>{
    if(filtro === 'todos') return true
    return mov.categoria === filtro
  })

  const movOrdenados = [...movFiltrados].sort((a,b)=>{
    if(orden === 'fechaAsc') return new Date(a.fecha) - new Date(b.fecha)
    if (orden === 'fechaDes') return new Date(b.fecha) - new Date(a.fecha)
    if (orden === 'montoAsc') return a.monto - b.monto
    return b.monto - a.monto //montoDes
  })

  return (
      <div className='contenedor-app'>
        <div className='columna-izq'>
          <Presupuesto movimientos={movimientos}/>
          <Formulario agregarMov={agregarMovimiento} categorias={categorias}/>
        </div>
        <div className='contenedor-info'>
          <Balance movimientos={movimientos}/>
          <Listado 
            movimientos={movOrdenados}
            filtro={filtro}
            setFiltro={setFiltro}
            orden={orden}
            setOrden={setOrden}
            eliminar={eliminarMovimiento}
            actualizar={editarMovimiento}
            categorias={categorias}
          />
        </div>
      </div>
  )
}

export default App
