import { use, useState } from 'react'
import ItemMovimiento from './ItemMovimiento'
import '../App.css'


function Listado({movimientos, filtro, orden, setOrden, setFiltro, eliminar, actualizar}) {
  
  return (
    <div className='contenedor-listado'>
      <h2>Listado Movimientos</h2>
      <form className='contenedor-filtros'>
        <div className='campo-filtro'>
          <label htmlFor="filtro">Fitrar por Categoría</label>
          <select id="filtro" value={filtro} placeholder='Categoría' onChange={(e)=>setFiltro(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="comida">Comida</option>
            <option value="salario">Salario</option>
            <option value="transporte">Transporte</option>
            <option value="ocio">Ocio</option>
            <option value="servicios">Servicios</option>
            <option value="salud">Salud</option>
            <option value="otros">Otros</option>            
          </select>
        </div>
        <div className='campo-filtro'>
          <label htmlFor="ordenar">Ordenar por</label>
          <select id="ordenar" value={orden} onChange={(e)=>setOrden(e.target.value)}>
            <option value="fecha">Fecha</option>
            <option value="monto">Monto</option>
          </select>
        </div>
      </form>
      <div className='header-tabla'>
        <span>Fecha</span>
        <span>Descripción</span>
        <span>Categoría</span>
        <span>Monto</span>
        <span>Tipo</span>
        <span>Acciones</span>
      </div>
      <ul>
        {movimientos.map((elemento)=>(
          <ItemMovimiento key={elemento.id} mov={elemento} eliminar={eliminar} actualizar={actualizar}/>
        ))}
      </ul>
    </div>
  )
}

export default Listado