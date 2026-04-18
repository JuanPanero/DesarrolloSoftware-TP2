function ItemMovimiento({mov, eliminar}){
    const manejoEliminar= (e) =>{
        eliminar(mov)
    }

    return(
        <li>
            <span>{mov.fecha}</span>
            <span>{mov.descripcion}</span>
            <span>{mov.monto}</span>
            <span>{mov.categoria}</span>
            <button onClick={manejoEliminar}>Eliminar</button>
            <button>Editar</button>
        </li>
    )
}

export default ItemMovimiento