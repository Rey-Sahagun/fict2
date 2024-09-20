import { useState } from "react";

// Definimos el Hook para manejar formularios en JavaScript
export const useForm = (formularioInicial) => {
    
    // Estado que se inicializa con el formulario que se pase como argumento
    const [state, setState] = useState(formularioInicial);

    // Función para actualizar el estado basado en el campo y el valor
    const onChange = (value, campo) => {
        setState({
            ...state,  // Mantenemos el estado previo
            [campo]: value  // Actualizamos solo el campo que cambió
        });
    };

    // Retornamos el estado y la función de cambio de estado
    return {
        ...state,  // Exponemos cada valor del estado como atributos individuales
        formulario: state,  // Alias para el estado completo
        onChange
    };
};
