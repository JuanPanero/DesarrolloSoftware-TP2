import { useState } from "react"
function EditMovimiento({mov, actualizar, cambiarEditando}){
        const [descripcion, setDescripcion] = useState(mov.descripcion)
        const [monto, setMonto] = useState(mov.monto)
        const [tipo, setTipo] = useState(mov.tipo)
        const [categoria, setCategoria] = useState(mov.categoria)
        const [fecha, setFecha] = useState(mov.fecha)

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
        cambiarEditando()
        }

    return(
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

    )
}

export default EditMovimiento