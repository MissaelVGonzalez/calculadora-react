import Pantalla from "./componentes/pantalla.jsx";
import './App.css';
import Boton from "./componentes/boton.jsx";
import BotonClear from "./componentes/botonclear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";
import Logo from "./componentes/logo.jsx";


function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }else {
      alert("agrega valores para realizar el calculo");
    }

  };
  

  return (
    <div className="App">

      <Logo/>
      <div className='contenedorCalculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton> <Boton manejarClick={agregarInput}>2</Boton> <Boton manejarClick={agregarInput}>3</Boton> <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton> <Boton manejarClick={agregarInput}>5</Boton> <Boton manejarClick={agregarInput}>6</Boton> <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton> <Boton manejarClick={agregarInput}>8</Boton> <Boton manejarClick={agregarInput}>9</Boton> <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton> <Boton manejarClick={agregarInput}>0</Boton> <Boton manejarClick={agregarInput}>.</Boton> <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput("") } >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
