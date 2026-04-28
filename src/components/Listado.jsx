import ItemMovimiento from './ItemMovimiento'
import '../styles/Listado.css'

function Listado({movimientos, filtro, orden, setOrden, setFiltro, eliminar, actualizar, categorias}) {
  
  return (
    <div className='contenedor-listado'>
      <h2>Listado Movimientos</h2>

      <div className='contenedor-filtros'>
        <div className='campo-filtro'>
          <label htmlFor="filtro">Fitrar por Categoría</label>
          <select id="filtro" value={filtro} placeholder='Categoría' onChange={(e)=>setFiltro(e.target.value)}>
            <option value="todos">Todos</option>
            {categorias.map((cat)=>(
              <option key={cat} value={cat}  className='option-categoria'>
                {cat}
              </option>
            ))}           
          </select>
        </div>
      
        <div className='campo-filtro'>
          <label htmlFor="ordenar">Ordenar por</label>
          <select id="ordenar" value={orden} onChange={(e)=>setOrden(e.target.value)}>
            <option value="fechaAsc">Fecha (Más antiguos)</option>
            <option value="fechaDes">Fecha (Más recientes)</option>
            <option value="montoAsc">Monto (Menor a Mayor)</option>
            <option value="montoDes">Monto (Mayor a Menor)</option>
          </select>
        </div>
      </div>

      <div className='header-tabla'>
        <span>Fecha</span>
        <span>Descripción</span>
        <span>Categoría</span>
        <span>Monto</span>
        <span>Tipo</span>
        <span>Acciones</span>
      </div>
      
      <ul>
        {movimientos.length > 0 ? (
          movimientos.map((elemento) => (
            <ItemMovimiento 
              key={elemento.id} 
              mov={elemento} 
              eliminar={eliminar} 
              actualizar={actualizar}
              categorias={categorias}
            />
          ))
        ) : (
          <p className="mensaje-vacio">No se encontraron movimientos.</p>
        )}
      </ul>
    </div>
  )
}

export default Listado