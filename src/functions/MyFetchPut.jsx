function MyFetchPut() {
    function fcnFetchPut() {
        console.log("¡Ejecutando API PUT con Fetch!");

        let usuarioActualizado = {
            nombre: 'Aitana',
            edad: 26 
        };

        fetch('https://reqres.in/api/users/2', { 
            method: 'PUT', 
            body: JSON.stringify(usuarioActualizado), 
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


    fcnFetchPut();

    return (
        <div>
            <h1>Programa para realizar PUT con Fetch (Put)</h1>
        </div>
    );
}

export default MyFetchPut;
