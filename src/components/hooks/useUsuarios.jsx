import { useState, useRef, useEffect } from 'react';
import axios from 'axios';  // Puedes usar fetch o axios para realizar las peticiones HTTP

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);  // Estado para almacenar los usuarios
    const ficRefPage = useRef(1);  // Referencia para la página actual

    // Función para cargar usuarios desde la API
    const ficFnCargaUsuarios = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users', {
                params: { page: ficRefPage.current }  // Se pasa la página actual como parámetro
            });
            if (response.data.data.length > 0) {
                setUsuarios(response.data.data);  // Actualizamos los usuarios
            } else {
                alert('No hay más registros');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Función para avanzar a la siguiente página
    const ficFnPaginaSiguiente = () => {
        ficRefPage.current += 1;  // Avanzamos la página
        ficFnCargaUsuarios();  // Cargamos los usuarios de la nueva página
    };

    // Función para retroceder a la página anterior
    const ficFnPaginaAnterior = () => {
        if (ficRefPage.current > 1) {
            ficRefPage.current -= 1;  // Retrocedemos la página
            ficFnCargaUsuarios();  // Cargamos los usuarios de la nueva página
        }
    };

    useEffect(() => {
        ficFnCargaUsuarios();  // Cargar los usuarios la primera vez que se renderiza
    }, []);

    return {
        usuarios,
        ficFnPaginaSiguiente,
        ficFnPaginaAnterior
    };
};
