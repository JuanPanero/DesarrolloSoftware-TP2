import ItemMovimiento from './ItemMovimiento'

function Listado({movimientos, eliminar, actualizar}) {
  
  return (
    <div className='contenedor-listado'>
      <h2>Listado Movimientos</h2>
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