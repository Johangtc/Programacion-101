console.log("Ejercicio 7")

console.log("Crea una función que reciba 3 argumentos numéricos (a,b,c)")
console.log("la función se debe de llamar max, la función debe determinar")
console.log("cuál es el número más grande de los 3 y regresar ese número")
console.log("let maxValue = max(5,2,6);")
console.log("console.log(maxValue); // 6")

function max(a: number, b: number, c: number) {
    if (a > b) {
        return (a > c) ? a : c;
    } else {
        return (b > c) ? b : c;
    }
}

let maxValue = max(5, 2, 6);
console.log(maxValue); // 6
