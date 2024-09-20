import { useCounter } from './hooks/useCounter';  // Asegúrate de que la ruta sea correcta

export const ContadorHook = () => {
    // Usamos el custom hook useCounter con el valor inicial de 100
    const { valor, acumular } = useCounter(100);

    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            
            {/* Botón para sumar */}
            <button className="Button1" onClick={() => acumular(1)}>
                Sumar (+1)
            </button>
            
            {/* Botón para restar */}
            <button className="Button2" onClick={() => acumular(-1)}>
                Restar (-1)
            </button>
        </div>
    );
};
