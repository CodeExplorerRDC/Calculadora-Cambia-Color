import '../css/Pantalla.css';
import React from 'react';

function Pantalla(props) {
    return (
        <div className='pantalla'>
            {props.input}
        </div>
    );

}

export default Pantalla;