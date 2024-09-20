function MyObjects() {
    
    const persona = {
        nombre: 'Aldo',
        edad: 23,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'Lo de Lamedo No. 21'
        }
    };

    console.log("JSON Persona: ", JSON.stringify(persona, null, 5));

    return (
        <>
            <div>
                <h1>
                    Programa de Objetos Literales e Interfaces
                </h1>
                <h2>
                    <code>
                        <pre>
                            {JSON.stringify(persona, null, 5)}
                        </pre>
                    </code>
                </h2>
            </div>
        </>
    );
};

export default MyObjects;
