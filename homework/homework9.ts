console.log("Ejercicio 9")

console.log("Crear una función que reciba un arreglo como argumento")
console.log("la función debe retornar un nuevo arreglo pero filtrando todos los nombres")
console.log("que empiezan con una determinada letras")

//ejemplo
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']
//let heroesWithLetterS = heroesThatStartsWith( heroes, 'S' )
//console.log( heroesWithLetterS ) // ['She Hulk', 'Spiderman'] 

function heroesThatStartsWith(nameList: string[], letter: string) {
    letter = letter.toUpperCase(); // Convertimos la letra a mayúsculas
    let newNameList: string[] = [];

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].startsWith(letter)) {
            newNameList.push(nameList[i]);
        }
    }

    return newNameList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(heroesWithLetterS); // ['She Hulk', 'Spiderman']

