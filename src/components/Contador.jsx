import React from 'react';
import {useState} from 'react';
export const Contador = () => {
    //FIC: use state para "valor"
    const [valor, setValor] = useState(0);
    //FIC: function for increment or decrement value
    const acumular = (numero)=> {
        setValor(valor + numero);
    };
    return (
        <div>
           
            <h1>
                Aprender useState
            </h1>

            <h2>
                Contador: <small>{valor}</small>
            </h2>

            <button onClick={()=> acumular(1)}>
                Sumar (+1)
            </button> 
            &nbsp;
            <button onClick={()=> acumular(-1)}>
                Restar (-1)
            </button>
        </div>
    )
};