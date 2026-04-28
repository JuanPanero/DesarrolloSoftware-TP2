function ViewMovimiento({mov, eliminar, cambiarEditando}){

        const manejoEliminar= (e) =>{
            eliminar(mov)
        }  
        const formatearFecha = (fechaStr) => {
            if(!fechaStr) return "";
            const [anio, mes, dia] = fechaStr.split("-");
            return `${dia}/${mes}/${anio}`;
        }
    return(
        <>
            <span>{formatearFecha(mov.fecha)}</span>
            <span>{mov.descripcion}</span>
            <span className="span-categoria">
                {mov.categoria}
            </span>
            <span className={mov.tipo === 'ingreso' ? 'monto-ingreso' : 'monto-gasto'}>
                {mov.tipo === 'ingreso' ? `+ $${mov.monto}` : `- $${mov.monto}`}
            </span>
            <span className={mov.tipo === 'ingreso' ? 'tipo-ingreso' : 'tipo-gasto'}>
                {mov.tipo}
            </span>
            <span>
                <button className="btn-accion btn-editar" onClick={cambiarEditando}>Editar</button>
                <button className="btn-accion btn-eliminar" onClick={manejoEliminar}>Eliminar</button>
            </span>
                </>
    )
}

export default ViewMovimiento