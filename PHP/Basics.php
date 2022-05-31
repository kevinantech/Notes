<?php
# ECHO & VARIABLES
# echo, para mostrar contenido.
/*  
    echo 'Hola mundo';
    # Los caracteres contenidos entre comillas simples se interpretaran como 
    # texto, por ende no se pueden llamar variables dentro de estas, en caso 
    # de hacerlo simplemente se imprimira el identificador de la variable mas 
    # no su valor.
*/
/*
    $name = "Kevin";    # --> Variable.
    echo "Hola, soy $name :D";  
    # Usar comillas dobles es la manera recomendada, ya que podemos llamar a 
    # las variables y en este caso suvalor siempre sera impreso.
*/
/*
    $a = 5;
    $b = 10;
    echo "La suma es ".($a + $b);   # --> Para concatenar se utiliza un punto.
*/
# ARREGLOS
/* 
    $nombres = array ( 
        "Kevin",
        "Andres",
        "Gomez",
        "Meza"
    );
    echo $nombres[0];
*/
# ARREGLOS ASOCIATIVOS
/*
    $nombres = array (
        "firstName" => "Kevin Andres",
        "lastName" => "Gomez Meza"
    );
    echo $nombres["firstName"];
*/ 
# CONSTANTES
/*
    define("PI", 3.14);
    echo PI;
*/ 
# REFERENCIAS       
/*          
    $a = 10;
    $b = &$a;
    $b += 10;
    echo $a;
    # Podemos ver que el valor de $a cambio debido a que $b es la referencia de 
    # $a.
*/
# FOREACH
/*
    $vocales = array ('A', 'E', 'I', 'O', 'U');
    foreach($vocales as $vocal){
        echo $vocal."<br>";
    }
*/
# FUNCIONES
/*
    function operaciones($data1, $data2, $calc = "addition"){
        switch($calc){
            case "addition":
                $ans = $data1 + $data2;
                break;
            case "subtraction":
                $ans = $data1 - $data2;
                break;
            case "multiplication":
                $ans = $data1 * $data2;
                break;
            case "division":
                $ans = $data1 / $data2;
                break;
        }
        return $ans;
    }
    echo operaciones(10, 9, "addition"); // Retorna el resultado de 10 + 9.
*/
?>