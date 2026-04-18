

function BalanceTotal({movimientos}){
    let totalIngreso = 0
    let totalEgreso = 0


    movimientos.forEach(mov => {
        if (mov.tipo === 'ingreso'){
            totalIngreso += mov.monto
        }else {
            totalEgreso += mov.monto
        }
    })
    
    const balanceTotal = totalIngreso - totalEgreso

    return(
        <div className="contenedor-balance">
            <h2>Balance Total</h2>
            <p>${balanceTotal}</p>
        </div>
    )
}

export default BalanceTotal