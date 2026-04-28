import { useState } from 'react'   
import '../styles/Formulario.css'

function Formulario({agregarMov, categorias}) {
    const [descripcion, setDescripcion] = useState('')
    const [monto, setMonto] = useState('')
    const [tipo, setTipo] = useState('gasto')
    const [categoria, setCategoria] = useState('comida')
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0])

    const guardarMov = (e) =>{
        e.preventDefault()

        if(monto <= 0 || monto === ''|| descripcion.trim() === ''){
            alert("Por favor, complete bien los campos")
            return
        }

        const nuevoMov = {
            id: Date.now(),
            descripcion: descripcion.trim(),
            monto: parseFloat(monto),
            tipo,
            categoria,
            fecha
        }

        agregarMov(nuevoMov)

        setDescripcion('')
        setMonto('')
        setCategoria('comida')
        setTipo('gasto');
        setFecha(new Date().toISOString().split('T')[0]);
    }
   
    return(
        <form onSubmit={guardarMov} className='formulario'>
            <h2>Añadir Movimientos</h2>

            <div className='campoForm'>
                <label htmlFor="fecha">Fecha</label>
                <input 
                    id="fecha"
                    type="date" 
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            
            <div className='campoForm'>
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id='descripcion' placeholder='Ej. Supermercado' value={descripcion} 
                    onChange={(e)=>setDescripcion(e.target.value)}
                />
            </div>

            <div className='campoForm'>
                <label htmlFor="categoria">Categoría</label>
                <select id='categoria' value={categoria} placeholder='Categoría' onChange={(e)=>setCategoria(e.target.value)}>
                    {categorias.map((cat)=>(
                        <option key={cat} value={cat}  className='option-categoria'>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className='campoForm'>
                <label htmlFor="monto">Monto</label>
                <input type="number" id='monto' placeholder='$0.00' value={monto}
                    onChange={(e)=>setMonto(e.target.value)}
                />
            </div>

            <div className='campoForm'>
                <label>Tipo</label>
                <div className="contenedor-tipo">
                    <input 
                        type="radio" 
                        id="tipoGasto" 
                        name="tipo" 
                        value="gasto" 
                        checked={tipo === 'gasto'} 
                        onChange={(e) => setTipo(e.target.value)}
                        className="radio-input"
                    />
                    <label htmlFor="tipoGasto" className="radio-label label-gasto">Gasto</label>

                    <input 
                        type="radio" 
                        id="tipoIngreso" 
                        name="tipo" 
                        value="ingreso" 
                        checked={tipo === 'ingreso'} 
                        onChange={(e) => setTipo(e.target.value)}
                        className="radio-input"
                    />
                    <label htmlFor="tipoIngreso" className="radio-label label-ingreso">Ingreso</label>
                </div>
            </div>

            <button type='submit'>Guardar Movimiento</button>
        </form>
    )
}

export default Formulario