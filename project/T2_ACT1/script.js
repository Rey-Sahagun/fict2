// Ejemplo de una promesa básica
function promesaBasica() {
    const promesa = new Promise((resolve, reject) => {
      let exito = true; // Cambiar a false para ver el comportamiento de reject
      if (exito) {
        resolve("La promesa fue resuelta con éxito.");
      } else {
        reject("Hubo un error.");
      }
    });
  
    promesa
      .then((resultado) => {
        console.log(resultado);
        document.getElementById("contenido").innerHTML = `<p>${resultado}</p>`;
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("contenido").innerHTML = `<p>${error}</p>`;
      });
  }
  // Encadenando promesas
function promesasEncadenadas() {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(1), 1000);
    });
  
    promesa
      .then((resultado) => {
        console.log(resultado); // 1
        return resultado * 2;
      })
      .then((resultado) => {
        console.log(resultado); // 2
        return resultado * 3;
      })
      .then((resultado) => {
        console.log(resultado); // 6
        document.getElementById("contenido").innerHTML = `<p>Resultado final: ${resultado}</p>`;
      });
  }
  // Promise.all para ejecutar múltiples promesas en paralelo
function promesasAll() {
    const promesa1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    const promesa2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
    const promesa3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
  
    Promise.all([promesa1, promesa2, promesa3])
      .then((resultados) => {
        console.log(resultados); // [1, 2, 3]
        document.getElementById("contenido").innerHTML = `<p>Resultados: ${resultados}</p>`;
      });
  }
// Promise.race devuelve el primer resultado que se resuelve o rechaza
function promesasRace() {
    const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1"), 1000));
    const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2"), 2000));
  
    Promise.race([promesa1, promesa2])
      .then((resultado) => {
        console.log(resultado); // "Promesa 1"
        document.getElementById("contenido").innerHTML = `<p>Ganador: ${resultado}</p>`;
      });
  }
// Introducción a Fetch
function origenesFetch() {
    document.getElementById("contenido").innerHTML = `
      <p>Fetch es una API nativa de JavaScript que permite realizar peticiones HTTP de una manera más sencilla que XMLHttpRequest.</p>
      <p>Usa promesas para manejar respuestas asíncronas.</p>`;
  }
// Ejemplo de Fetch con un GET
function fetchGet() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("contenido").innerHTML = `<p>Título del Post: ${data.title}</p>`;
      })
      .catch((error) => {
        console.error("Error en la petición GET:", error);
      });
  }
// Ejemplo de Fetch con un POST
function fetchPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Nuevo Post",
        body: "Este es el contenido del nuevo post",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("contenido").innerHTML = `<p>Nuevo Post creado: ${data.title}</p>`;
      })
      .catch((error) => {
        console.error("Error en la petición POST:", error);
      });
  }
// Fetch de un archivo Blob
function fetchBlob() {
    fetch("https://via.placeholder.com/150")
      .then((response) => response.blob())
      .then((blob) => {
        const imgUrl = URL.createObjectURL(blob);
        document.getElementById("contenido").innerHTML = `<img src="${imgUrl}" alt="Imagen de Blob">`;
      })
      .catch((error) => {
        console.error("Error al obtener Blob:", error);
      });
  }
            
  
  