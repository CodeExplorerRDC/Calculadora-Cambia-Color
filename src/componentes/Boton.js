import React from "react";
import '../css/Boton.css';

function Boton(props) {
    const EsOperador = (valor) => {
        return isNaN(valor) && (valor !== '.');
    }
    return (
        <div className={`boton ${EsOperador(props.children)  ? 'Operador' : null } `}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );

}

export default Boton;