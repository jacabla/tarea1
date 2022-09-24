/*
Realice una función que me imprima todos los elementos de un array sin importar la
cantidad de elementos de un array

mostarElementos([1,2,3,4,5])
//Esto deberia imprimir lo siguiente
//1
//2
//3
//4
//5 */

let elementos = [1, 2, 3 ,4 ,5];

function mostrarElementos() {
    for(i = 1; i <= elementos.length; i++)
    console.log(i);
}

mostrarElementos();
