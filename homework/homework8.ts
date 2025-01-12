console.log("Ejercicio 8")
console.log("Crear una función que reciba como argumento un arreglo")
console.log("la función debe retornar el nombre que tengas más letras del arreglo")
console.log("y debe trabajar así: ")

//let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
//let hero = largestNameOfArray(heroes) ;
//console.log(hero); // Profesor Charles Xavier

function largestNameOfArray(nameArray: string[]) {
    let largestName = ' ';
    
    for (let i = 0; i < nameArray.length; i++) {
        let name = nameArray[i];
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    
    return largestName; // El retorno debe estar fuera del bucle
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); // "Profesor Charles Xavier"

