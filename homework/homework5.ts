console.log(' Ejercicio 5: ');  

//dado el siguiente arreglo

export let numbers: any[] = [1,6,8,4,2,7,10,3,5];
//haga una impresión en consola así
//1 es impar
//2 es par...

//DEBE USAR UN CICLO FOR PARA GENERAR DICHA IMPRESION
//TIP: USAR EL OPERADOR % PARA OBTENER EL RESULTADO

for ( let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        console.log('El número ' + numbers[i] + ' es par');
    } else {
        console.log('El número ' + numbers[i] + ' es impar');
    }
        
    }
