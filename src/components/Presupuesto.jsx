import { useState, useEffect } from "react"

function Presupuesto({movimientos}){
    const [presupuesto, setPresupuesto] = useState(()=>{
        try {
            const guardado = localStorage.getItem('presupuesto');
            return guardado ? JSON.parse(guardado) : 0;
        } catch {
            return 0;
        }
    })

    const hoy = new Date()
    const monthActual = hoy.getMonth()
    const yearActual = hoy.getFullYear()

    useEffect(() => {
        localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
    }, [presupuesto]);

    let totalGastos = 0
    movimientos.forEach(mov => {
        const fechaMov = new Date(mov.fecha)
        if (mov.tipo === 'gasto' && monthActual === fechaMov.getMonth() && yearActual === fechaMov.getFullYear()){
            totalGastos += mov.monto
        }
    })

    const porcentaje = presupuesto > 0 ? (totalGastos / presupuesto) * 100 : 0
    const excedido = totalGastos > presupuesto

    return(
        <div className="tarjeta-presupuesto">
            <h2>Límite de Gastos Mensual</h2>
            <div className="form-presupuesto">
                <label htmlFor="presupuesto">Presupuesto</label>
                <input type="number" placeholder="$0.00" value={presupuesto} onChange={e => setPresupuesto(e.target.value)}/>
            </div>
            <div className="info-consumo">
                <p>Gastado: ${totalGastos}</p>
                { !excedido && <p>Quedan: ${presupuesto - totalGastos}</p>}
                <p>{porcentaje.toFixed(1)}%</p>
            </div>
            <div className="barra-fondo">
                <div
                    className={`barra-progreso  ${excedido ? 'peligro': porcentaje > 75 ? 'alerta' : 'seguro'}`}
                    style={{width: `${porcentaje}%` }} 
                ></div>
            </div>
            {excedido && presupuesto != 0 && (
                <div className="alerta-presupuesto">
                    <p>⚠️ <strong>Atención:</strong></p>
                    <p>Has superado tu presupuesto por ${totalGastos - presupuesto}.</p>
                </div>
            )}
        </div>
    )
}

export default Presupuesto