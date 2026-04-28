import { useState } from "react"
import ViewMovimiento from "./ViewMovimiento"
import EditMovimiento from "./EditMovimiento"

function ItemMovimiento({mov, eliminar, actualizar, categorias}){
    const [editando, setEditando] = useState(false)
    
    const cambiarModo = () =>{
        setEditando(!editando)
    }

    return(
        <li className={`contenedor-item ${editando ? 'editando' : ''}`}>
            {editando ? (
                <EditMovimiento
                    mov={mov}
                    actualizar={actualizar}
                    cambiarModo={cambiarModo}
                    categorias={categorias}
                />
            ) : 
            (
                <ViewMovimiento
                    mov={mov}
                    eliminar={eliminar}
                    cambiarModo={cambiarModo}
                />
            )}
        </li>
    )
}

export default ItemMovimiento