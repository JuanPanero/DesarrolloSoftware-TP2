function TarjetaBalance({titulo, monto, tipo}){

    const claseMonto = tipo === 'ingreso' ? 'positivo' : 'negativo';    

    return(
        <div className={`tarjeta ${claseMonto}`}>
            <h3>{titulo}</h3>
            <p>
                {monto === 0 ? '' : (tipo === 'ingreso' ? `+ ` : `- `)}
                {`$${monto.toLocaleString()}`}
            </p>
        </div>
    )
}

export default TarjetaBalance