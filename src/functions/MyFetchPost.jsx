import React from 'react';

function MyFetchPost() {
    function fcnFetchPost() {
        console.log("¡Ejecutando API POST con Fetch!");

        let usuario = {
            nombre: 'Aitana',
            edad: 25
        };

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(usuario), 
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


    fcnFetchPost();

    return (
        <div>
           
           <h1>Fundamentos de promesas y Fetch (Post) </h1>
        </div>
    );
}

export default MyFetchPost;
