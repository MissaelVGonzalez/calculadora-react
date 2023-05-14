import React from "react";
import "../estilos/botonclear.css";

const botonclear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default botonclear