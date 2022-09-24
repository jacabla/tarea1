/**
 Realice una función que me diga si la edad de la persona es suficiente para ingresar a
un bar

ingresoBar(20)//Esto deberia imprimir que si puede entrar
ingresoBar(15)//Esto deberia imprimir que NO puede entrar
 */

const puedeIngresarABar = (edad) =>{
    if (edad >= 18) {
        console.log("Su edad es de " + edad + ", por lo que puede ingresar al bar");
    } else {
        console.log("Su edad es de " + edad + ", por lo que no puede ingresar al bar por se menor de edad");
    }
}

puedeIngresarABar(20);
puedeIngresarABar(15);