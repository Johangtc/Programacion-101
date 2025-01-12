//ARREGLOS
//base cero
export let employees:string[] = ['Johan', 'Carmela', 'Sofia'];
let flowers:string[] = ['Flores', 'Girasol', 'Lirio']; //arreglo de strings
let numbers:number[] = [1, 2, 3]; //arreglo de numeros
let salaries:number[] = [1500, 2400, 3200]; 

//mediante un ciclo for imprimir los nombres de cada flores

for ( let i=0; i <= flowers.length - 1; i++){
    console.log(flowers[i]);
}


//imprimir en consola con un ciclo for
//Johan tiene un salario de 1500
//Carmela tiene un salario de 2400
//Sofia tiene un salario de 3200

for ( let i = 0; i <= employees.length - 1; i++){
    console.log(employees[i] + ' tiene un salario de ' + salaries[i]);
}
