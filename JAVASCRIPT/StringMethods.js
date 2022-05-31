
    let a = "Hola Mundo";
    let b = "Me gusta Nueva  Zelanda"
    let c = 10;
    let d = "  Toronto  "
    console.log(a.concat(" :D, ", b));  // Metodo util para concatenar o añadir caracteres a una cadena.
    console.log(a.toUpperCase());       // Retorna en mayusculas toda la cadena.
    console.log(a.toLowerCase());       // Retorna en minusculas toda la cadena. 
    console.log(a.length);              // Retorna la cantidad de caracteres.
    console.log(a.startsWith(b));       // Retorna un boolean, compara si ambas cadenas coinciden en el primer caracter.
    console.log(a.endsWith(b));         // Al igual que el metodo startsWith() con la diferencia de que compara si ambas cadenas coinciden en el ultimo caracter.
    console.log(a.includes(b));         // Retorna un boolean, a partir si una cadena esta contenida en otra.
    console.log(a.indexOf("Mundo"));    // Usa la logica de includes(), si encuentra una cadena dentro de otra este metodo devolvera el indice del primer caracter de la cadena buscada dentro la cadena padre. En caso de no encontrar nada devuelve un -1. 
    console.log(a.lastIndexOf("Mundo"));// Al igual que el metodo indexOf() con la diferencia de que este devolvera el indice del ultimo caracter de la cadena buscada dentro la padre.
    console.log(a.repeat(2));           // Retorna una cadena repetida la cantidad de veces que le especifiquemos.
    console.log(a.split(" "));          // Retorna un array tipo string conformado por aquellas cadenas separadas por un caracter indicado.
    console.log(a.substring(0, 4));     // Retorna una nueva cadena a partir de la cadena padre, extrae los caracteres definiendo la posicion inicial y final de los caracteres de la cadena a extraer de la padre. Nota: Al definir el indice o posicion final, el metodo no captura el caracter que este en esa posicion por ende hay sumarle una posicion mas, ya que solo define donde termina sin tomar ese caracter.
    console.log(typeof c.toString())    // Retorna una cadena, convierte un dato a tipo string. Nota: typeof es para ver el tipo de dato de una variable.
    console.log(d.trim().length);       // Retorna una cadena en la cual se eliminan los espacios que estan demas antes del comienzo y despues del final de una cadena padre. Nota: length es para saber el tamaño de un arreglo.
    console.log(d.trimStart().length);  // Retorna una cadena en la cual se eliminan los espacios que estan demas antes del comienzo de una cadena padre.
    console.log(d.trimEnd().length);    // Retorna una cadena en la cual se eliminan los espacios que estan demas despues del final de una cadena padre.
    