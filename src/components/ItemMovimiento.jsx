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

    return(
        <li className="contenedor-item">
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
                    <button onClick={manejoCambiar}>Guardar</button>
                    <button onClick={cambiarEditando}>Cancelar</button>
                </>
            ) : 
            (
                <>
                    <span>{mov.fecha}</span>
                    <span>{mov.descripcion}</span>
                    <span>{mov.categoria}</span>
                    <span>{mov.tipo === 'ingreso' ? `+ $${mov.monto}` : `- $${mov.monto}`}</span>
                    <span>{mov.tipo}</span>
                    <span>
                        <button onClick={manejoEliminar}>Eliminar</button>
                        <button onClick={cambiarEditando}>Editar</button>
                    </span>
                </>

            )
            }
        </li>
    )
}

export default ItemMovimiento