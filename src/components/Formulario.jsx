import { useState } from 'react'
import '../App.css'

function Formulario({agregarMov, className}) {
    const [descripcion, setDescripcion] = useState('')
    const [monto, setMonto] = useState(0)
    const [tipo, setTipo] = useState('gasto')
    const [categoria, setCategoria] = useState('comida')
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0])

    const guardarMov = (e) =>{
        e.preventDefault()

        if(monto <= 0 || descripcion === ''){
            alert("Por favor, complete bien los campos")
            return
        }

        const nuevoMov = {
            id: Date.now(),
            descripcion,
            monto: parseFloat(monto),
            tipo,
            categoria,
            fecha
        }

        agregarMov(nuevoMov)

        setDescripcion('')
        setMonto(0)
        setCategoria('comida')
    }
   
    return(
        <div>
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
                        <option value="comida">Comida</option>
                        <option value="salario">Salario</option>
                        <option value="transporte">Transporte</option>
                        <option value="ocio">Ocio</option>
                        <option value="servicios">Servicios</option>
                        <option value="salud">Salud</option>
                        <option value="otros">Otros</option>
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
        </div>
    )
}

export default Formulario