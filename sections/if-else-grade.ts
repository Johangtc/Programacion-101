/* Realizar un programa que muestre la nota
del alumno como A,B,C,D,F donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let grade: number = 75;

if ( grade >= 90 ){
    console.log('A');
} else if ( grade >= 80 ){
    console.log('B');
} else if ( grade >= 70 ){
    console.log('C');
} else if ( grade >= 60 ){
    console.log('D');
} else {
    console.log('F');
}  