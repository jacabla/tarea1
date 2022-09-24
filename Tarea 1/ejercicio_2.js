/*Realice una función que me diga si un numero es par o no es par
Resultado esperado
par(238)//Esto deberia imprimirque si es par*/

const esPar = (num) => {;
    if ((num % 2) === 0) {
        console.log("Es un numero par");
    } else {
        console.log("No es un numero par");
    }
}

esPar(238);