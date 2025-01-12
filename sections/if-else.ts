// Objetivo: Mostrar el uso de if en TypeScript

console.log('Inicio de programa');

export let isTired: boolean = true;

//if ( isTired ) {
//    console.log('Tomar café');
//} else {
//    console.log('Tomar agua');
//}

let grade:number = 55;

if ( grade >= 60 ){
    console.log('Aprobado');
} else if ( grade > 50 ){
    console.log('Recuperación')
} else {
    console.log('Reprobado');
}


console.log('Fin de programa');