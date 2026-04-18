import ItemMovimiento from './ItemMovimiento'

function Listado({movimientos, eliminar}) {
  
  return (
    <div>
      <ul>
        {movimientos.map((elemento)=>(
          <ItemMovimiento key={elemento.id} mov={elemento} eliminar={eliminar}/>
        ))}
      </ul>
    </div>
  )
}

export default Listado