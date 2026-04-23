import { useState } from "react"
import '../App.css'

function Presupuesto({movimientos}){
    const [presupuesto, setPresupuesto] = useState('0')

    let totalIngresos = 0
    let totalGastos = 0


    movimientos.forEach(mov => {
        if (mov.tipo === 'gasto'){
            totalGastos +=mov.monto
        }
    })

    const porcentaje = presupuesto > 0 ? (totalGastos / presupuesto) * 100 : 0;
    const excedido = totalGastos > presupuesto;

    return(
        <div className="tarjeta-presupuesto">
            <div className="form-presupuesto">
                <label htmlFor="presupuesto">Presupuesto</label>
                <input type="number" placeholder="$0.00" value={presupuesto} onChange={e => setPresupuesto(e.target.value)}/>
            </div>
            <div className="info-consumo">
                <p>Gastado: ${totalGastos}</p>
                <p>{porcentaje.toFixed()}%</p>
            </div>
            <div className="barra-fondo">
                <div
                    className={`barra-progreso  ${excedido ? 'peligro': porcentaje > 75 ? 'alerta' : 'seguro'}`}
                    style={{width: `${porcentaje}%` }} 
                ></div>
            </div>
        </div>
    )
}

export default Presupuesto