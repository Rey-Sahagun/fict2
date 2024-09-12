function MyFunctions() {

    function fcnSumarUno(numero, fcnResultadoCallBack){
        setTimeout(function(){
            fcnResultadoCallBack(numero + 1);
        },800);
    };

    console.log("Programa de Funciones");

    fcnSumarUno(5, function(nuevoValor1){
        fcnSumarUno(nuevoValor1, function(nuevoValor2)){
            fcnSumarUno(nuevoValor2, function(nuevoValor3)){
                console.log("Resultado:", nuevoValor3);
            });
        });
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones
                </h1>
            </div>
       
        </>
    );
};

export default MyFunctions;