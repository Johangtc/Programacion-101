console.log(' Ejercicio 4: ');  
//Dado el siguiente arreglo:

//let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

//utilizando un ciclo for, barra todo el arreglo y determine
//¿cual es el numero mayor?

export let numbers: any[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

let max:number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];

        }
    }

console.log('El número mayor es: ', max);