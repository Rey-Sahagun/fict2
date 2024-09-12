function MyFetchPut() {
    // Función para realizar un PUT con fetch
    function fcnFetchPut() {
        console.log("¡Ejecutando API PUT con Fetch!");

        // Declaramos el objeto usuario con los datos a actualizar
        let usuarioActualizado = {
            nombre: 'Aitana',
            edad: 26 // Cambiamos la edad para simular la actualización
        };

        // Hacemos el PUT request con fetch
        fetch('https://reqres.in/api/users/2', { // Especificamos el ID del usuario a actualizar
            method: 'PUT', // Cambiamos el método a PUT
            body: JSON.stringify(usuarioActualizado), // Datos a enviar
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
            console.log("Respuesta del PUT:", respObj);
        })
        .catch(error => {
            console.log('Error en la petición API PUT');
            console.error(error);
        });
    }

    //*** Código principal ***//
    // Ejecutar la función que realiza el PUT
    fcnFetchPut();

    return (
        <div>
            <h1>Programa para realizar PUT con Fetch</h1>
        </div>
    );
}

export default MyFetchPut;
