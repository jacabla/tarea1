/**
 Realice una función que me ordene los elementos numéricos de un array

ordenar([1,3,2,4,7,6,5])//Esto deberia retornar [1,2,3,4,5,6,7]
 */

let numeros = [1, 3, 2, 4, 7, 6, 5];

function ordernarNumeros() {
    console.log("Este es el array original sin ordernar: " + numeros);

    orden = numeros.sort();
    console.log("Este es el array ya ordenado: " + orden);
    return orden;
}

ordernarNumeros();