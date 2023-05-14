import React from "react";
import "../estilos/boton.css";

function boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== ".") && (valor !== "=")
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? "operador" : null}`.trimEnd()} 
            onClick={() => props.manejarClick(props.children) }>
            {props.children}
        </div>
    );
}

export default boton