import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import Logo from './imagenes/logo.png'
import { evaluate} from 'mathjs';
function App() {
  const [input, setInput] = useState(1)

  const manejarClic = (valor) => {
    setInput(input + valor)
  }

  const resultado = () => {
    setInput(evaluate(input))
  }

  function cambiarColor() {
    var colorMenu = document.getElementById('colorMenu');
    var selectedColor = colorMenu.value;
    document.body.style.backgroundColor = selectedColor;
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img src={Logo}/>
      </div>
      <div className='Contenedor-Calculadora'>
        <Pantalla
        input={input}/>
        <div className='row'>
          <Boton manejarClic={manejarClic}>1</Boton>
          <Boton manejarClic={manejarClic}>2</Boton>
          <Boton manejarClic={manejarClic}>3</Boton>
          <Boton manejarClic={manejarClic}>+</Boton>
        </div>
        <div className='row'>
          <Boton manejarClic={manejarClic}>4</Boton>
          <Boton manejarClic={manejarClic}>5</Boton>
          <Boton manejarClic={manejarClic}>6</Boton>
          <Boton manejarClic={manejarClic}>-</Boton>
        </div>
        <div className='row'>
          <Boton manejarClic={manejarClic}>7</Boton>
          <Boton manejarClic={manejarClic}>8</Boton>
          <Boton manejarClic={manejarClic}>9</Boton>
          <Boton manejarClic={manejarClic}>*</Boton>
          <Boton manejarClic={resultado}>=</Boton>
        </div>
          <BotonClear manejarClear={() => setInput('')}>Limpiar</BotonClear>
        <select id='colorMenu' onChange={cambiarColor}>
          <option value='blue'>Azul</option>
          <option value='white'>Blanco</option>
          <option value='black'>Negro</option>
          <option value='orange'>Naranja</option>
          <option value='green'>Verde</option>
        </select>
      </div>
    </div>
  );
}

export default App;
