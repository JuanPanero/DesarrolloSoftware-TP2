import TarjetaBalance from './TarjetaBalance'

function Balance({movimientos}){
    
    let totalIngreso = 0
    let totalGasto = 0
    movimientos.forEach(mov => {
        if (mov.tipo === 'ingreso'){
            totalIngreso += mov.monto
        }else {
            totalGasto += mov.monto
        }
    })  
    const balanceTotal = totalIngreso - totalGasto

    return(
        <div className="contenedor-balance">
            <TarjetaBalance 
                titulo='Balance' 
                monto={Math.abs(balanceTotal)} 
                tipo={balanceTotal >=0 ? 'ingreso' : 'gasto'}
            />
            <TarjetaBalance 
                titulo='Ingresos' 
                monto={totalIngreso} 
                tipo='ingreso'
            />
            <TarjetaBalance 
                titulo='Gastos' 
                monto={totalGasto} 
                tipo='gasto'
            />
        </div>  
    )
}

export default Balance