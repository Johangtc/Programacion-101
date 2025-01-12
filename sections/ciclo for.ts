
export let hola = 1;

for ( let i:number = 0; i <= 10 ; i++) {
    
    if ( i === 5 ) {
        continue;
    }
    console.log( 'let i', i );

    if ( i === 5 ){
        break;
    }
}

console.log(' fin de programa');    