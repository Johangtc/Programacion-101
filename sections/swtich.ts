/* 1 es Lunes, 2 es Martes ... 7 es Domingo */
export let weekDay: number = 3;

if ( weekDay <= 0 ){
    console.log (' Dato no permitido ');

    throw new Error (' Dato no permitido, por favor introduzca un positivo ');  
}


switch (weekDay) {
    case 1: 
        console.log (' Lunes ');
        break;
    case 2:
        console.log (' Martes ');
        break;
    case 3:
        console.log (' Miercoles ');
        break;

    default:
        console.log (' no es Lunes ni Martes ni Miercoles ');
        break;

}