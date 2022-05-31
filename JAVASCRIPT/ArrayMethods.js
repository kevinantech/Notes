
    let names = ["Kevin", "Andres", "Meza"];
    //ARRAY TRANSFORM, estos metodos permiten modificar un array original.
    //console.log(names.pop());   // --> Retorna el ultimo elemento del array, ademas de que lo elimina del array original.
    //console.log(names.shift()); // --> Retorna el primer elemento del array, ademas de que lo elimina del array original.
    //console.log(names.push("Otro nombre mas")); // --> Retorna la cantidad de elementos de un array, con la particularidad de poder pasarle uno o mas elemento que queramos que sean añadidos dentro del array original, en ese caso nos devuelve el tamaño de array con los elementos agregados inicialmente.
    //console.log(names.reverse());   // --> Invierte el orden de los elementos dentro del array original.
    //console.log(names.unshift("Mi primer nombre")); // --> Retorna la cantidad de elementos de un array, con la particularidad de poder pasarle uno o mas elemento que queramos que sean añadidos dentro del array original, a diferencia de push() este situa los nuevos elementos al principio del array en vez del final, de igual manerea nos devuelve el tamaño de array con los elementos agregados inicialmente.
    //console.log(names.sort());  // --> Ordena los elementos del array como si fuera una un diccionario (lexicografico).
    /*
        names.splice(2, 0, "Gomez"); 
        console.log(names);
        // --> Este metodo permite modificar y manejar un array original, en el 
        // primer parametro le pasamos la posicion donde vamos a operar (Si se 
        // quiere desplazar al ultimo elemento del array se le indica -1), en el 
        // segundo parametro le pasamos cuantos elementos seguidos a esa posicion  
        // vamos a querer modificar, si no pasamos mas parametros la funcion 
        // entendera que queremos eliminar aquellos elementos seguidos de la
        // posicion establecida a operar, si agregamos algun otro parametro la 
        // funcion entendera que vamos a reemplazar o agregar mas elementos, esto 
        // depende de la cantidad de elementos a seguir de la posicion a operar, en 
        // caso de ser diferente a 0 lo que se hara es reemplazar los elementos 
        // seguidos de la posicion a operar en funcion a los parametros pasados. Si 
        // es 0 simplemte se agregaran elementos a partir de la posicion a operar, 
        // desplazando los demas elementos que le siguen a una posicion mayor a 
        // estos. 
    */
    // ARRAY ACCESS
    /*
        let access = names.join(" - "); 
        console.log(access);
        // --> Retorna una cadena de caracteres en funcion al contenido en un 
        // array, con la particularidad que le podemos pasar el separador para 
        // los elementos del array que seran convertidos a una cadena, que por 
        // defecto es una coma. 
    */
    //console.log(names.slice(0,2));  // --> Retorna los elementos de un array, especificando la posicion del elemento incial hasta el final teniendo en cuenta que la posicion final establecida no se toma, si no que el elemento anterior a esta es el que se toma, si se quieren seleccionar los elementos que vienen antes del elemento final solo se especifica -1 en el segundo parametro de la funcion, en caso de querer seleccionar desde una posicon x hasta el funal completamente solo no se especifa el segundo parametro, solo se le pasa el primer parametro que indica desde donde va a arrancar a tomar elementos del array.
    // TOSTRING, INDEXOF,LASTINDEXOFM INCLUDES
    // Estos metodos vistos en los metodos de cadenas tambien aplican para los arrays que no son de caracteres, puesto que en este caso acceden a elementos de igual manera como hacian en las cadenas. 
    // ARRAY REPETITION
    /*
        let aux = names.filter(item => item.length > 5);
        console.log(aux);
        // --> Funciona como un bucle parecido al forEach, con la particularidad de 
        // que puede retornar elementos que complan ciertas condiciones del array.
        // En el ejemplo pasa por cada elemento del array y verifica si cada 
        // elemento tiene mas de 5 caracteres, de ser así retorna aquellos 
        // elementos que cumplan esa condicion.
    */    
    //names.forEach(item => console.log(item));   // --> Bucle forEach
    