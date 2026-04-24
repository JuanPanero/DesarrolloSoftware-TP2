import { useState } from "react"

function ItemMovimiento({mov, eliminar, actualizar}){
    const [editando, setEditando] = useState(false)
    const [descripcion, setDescripcion] = useState(mov.descripcion)
    const [monto, setMonto] = useState(mov.monto)
    const [tipo, setTipo] = useState(mov.tipo)
    const [categoria, setCategoria] = useState(mov.categoria)
    const [fecha, setFecha] = useState(mov.fecha)

    
    const manejoEliminar= (e) =>{
        eliminar(mov)
    }

    const cambiarEditando = (e) =>{
        e.preventDefault()
        if (editando) {
            setDescripcion(mov.descripcion);
            setMonto(mov.monto);
            setFecha(mov.fecha);
            setCategoria(mov.categoria);
            setTipo(mov.tipo)
        }
        setEditando(!editando)
    }

    const manejoCambiar = (e) =>{
        e.preventDefault()
        if(monto <= 0 || descripcion === ''){
            alert("Por favor, complete bien los campos")
            return
        }
        const nuevoMov = {
            id: mov.id,
            descripcion,
            monto: parseFloat(monto),
            tipo,
            categoria,
            fecha
        }
        actualizar(nuevoMov)
        setEditando(false)
    }

    const formatearFecha = (fechaStr) => {
    if(!fechaStr) return "";
    const [anio, mes, dia] = fechaStr.split("-");
    return `${dia}/${mes}/${anio}`;
};

    return(
        <li className={`contenedor-item ${editando ? 'editando' : ''}`}>
            {editando ? (
                <>
                    <input 
                        id="fecha"
                        type="date" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                    <input type="text" id='descripcion' placeholder='Ej. Supermercado' value={descripcion} 
                        onChange={(e)=>setDescripcion(e.target.value)}
                    />
                    <select id='categoria' value={categoria} placeholder='Categoría'
                        onChange={(e)=>setCategoria(e.target.value)}>
                        <option value="comida">Comida</option>
                        <option value="salario">Salario</option>
                        <option value="transporte">Transporte</option>
                        <option value="ocio">Ocio</option>
                        <option value="servicios">Servicios</option>
                        <option value="salud">Salud</option>
                        <option value="otros">Otros</option>
                    </select>
                    <input type="number" id='monto' placeholder='$0.00' value={monto} 
                        onChange={(e)=>setMonto(e.target.value)}
                    />
                    <select id="tipo" value={tipo}
                        onChange={(e)=>setTipo(e.target.value)}>
                        <option value="gasto">Gasto</option>
                        <option value="ingreso">Ingreso</option>
                    </select>
                    <div className="contenedor-acciones">
                        <button onClick={manejoCambiar} className="btn-accion btn-editar">Guardar</button>
                        <button onClick={cambiarEditando} className="btn-accion btn-eliminar">Cancelar</button>
                    </div>
                </>
            ) : 
            (
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
        </li>
    )
}

export default ItemMovimiento