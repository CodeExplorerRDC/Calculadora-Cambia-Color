import '../css/BotonClear.css';
import React from 'react';

function BotonClear(props) {
    return (
        <div className='BotonClear'
        onClick={props.manejarClear}>
            {props.children}
        </div>
    );

}

export default BotonClear;