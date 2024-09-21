import { useState } from 'react';

export const useCounter = (inicial = 10) => {
    const [valor, setValor] = useState(inicial);
    
    // Función para acumular valor (sumar o restar)
    const acumular = (numero) => {
        setValor(valor + numero);
    };

    return {
        valor,
        acumular
    };
};
g