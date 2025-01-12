
export let base = 10;
let limit = 50;

//console.log('10x1 = 10');
//console.log('10x2 = 20');

for ( let i = 1; i <= limit; i++) {
    console.log( base, 'x', i, '=', base * i );
}


//ciclo do while

let i = 1;
do {
    console.log(base, 'x', i, '=', base * i );
    i++;
} while (i <= limit);