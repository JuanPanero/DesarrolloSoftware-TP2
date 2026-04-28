import { useState } from "react"
import ViewMovimiento from "./ViewMovimiento"
import EditMovimiento from "./EditMovimiento"

function ItemMovimiento({mov, eliminar, actualizar}){
    const [editando, setEditando] = useState(false)
    
    const cambiarEditando = () =>{
        setEditando(!editando)
    }

    return(
        <li className={`contenedor-item ${editando ? 'editando' : ''}`}>
            {editando ? (
                <EditMovimiento
                    mov={mov}
                    actualizar={actualizar}
                    cambiarEditando={cambiarEditando}
                />
            ) : 
            (
                <ViewMovimiento
                    mov={mov}
                    eliminar={eliminar}
                    cambiarEditando={cambiarEditando}
                />
            )
            }
        </li>
    )
}

export default ItemMovimiento