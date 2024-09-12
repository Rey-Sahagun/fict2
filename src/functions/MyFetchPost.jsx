import React from 'react';

function MyFetchPost() {
    // Función para realizar un POST con fetch
    function fcnFetchPost() {
        console.log("¡Ejecutando API POST con Fetch!");

        // Declaramos el objeto usuario
        let usuario = {
            nombre: 'Aitana',
            edad: 25
        };

        // Hacemos el POST request con fetch
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(usuario), // Datos a enviar
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return resp.json();
        })
        .then(respObj => {
            console.log("Respuesta del POST:", respObj);
        })
        .catch(error => {
            console.log('Error en la petición API POST');
            console.error(error);
        });
    }

    //*** Código principal ***//
    // Ejecutar la función que realiza el POST
    fcnFetchPost();

    return (
        <div>
            <h1>Fundamentos de promesas y Fetch</h1>
        </div>
    );
}

export default MyFetchPost;
