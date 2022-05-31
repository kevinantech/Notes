// VARIABLES 

    var a = "Hola Mundo";   // --> Global.
    let b = "2022";         // --> De scope.
    const c = 1;            // --> Constante. 

// CONCATENACION

    console.log(`${a}, estamos en el ${b}`);

// ARRAYS ASOCIATIVOS
// Son arrlegos donde el indice de los elementos no es una posicion que va del 
// 0 a una X cantidad. Si no que nosotros podemos especificar como se 
// denominara el indice.

    let motoOneMacro = {
        modelo: "One Macro",
        marca: "Motorola",
        ram: 4,
        rom: 64
    }

    // De la siguiente manera podemos acceder al primer elemento.
    
    console.log(motoOneMacro["modelo"]); 

// BREAK & CONTINUE
// break, permite salir del bucle del cual lo contenga.
// continue, saltea o ignora las sentencias que vengan despues de la sentencia.
/*
    let i = 0;
    while(i < 10){
        i++;
        console.log(`Ciclo ${i} `);
        if(i == 5){
            console.log("Fin del bucle");
            break;  // --> Permite salir del bucle en el quinto ciclo.
        }
    }
*/
/*
    for(let i = 1; i <= 5; i++){
        if( i == 2){
            continue; // --> Permite ignorar las sentencias del tercer ciclo.
        }
        console.log(i);
    }
*/
// FOR IN & FOR OF
// Ambos FOR recorren un arreglo de acuerdo a la cantidad de sus elementos.
// FOR IN, la variable de recorrido siempre sera igual al numero de la posicion 
// de un item del arreglo.
// FOR OF, la variable de recorrido siempre sera igual al valor contenido en un 
// item del arreglo.
/*
    let array = ["A", "E" ,"I" , "O", "U"];
    for(item in array){
        console.log(item);
    }
*/
/*
    let array = ["A", "E" ,"I" , "O", "U"];
    for(item of array){
        console.log(item); 
    }    
*/
// FUNCIONES
// Maneras de declarar funciones.
/*
    function holaMundo(){
        a = "Hola Mundo";
        return a;
    }
    console.log(holaMundo());
/*
/*  
    const holaMundo = function(){
        a = "Hola Mundo";
        return a;
    }
    console.log(holaMundo());
*/