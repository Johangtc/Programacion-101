//programación orientada a objetos

console.log("Entrando a la programación orientada a objetos");

export let person = {
    name: 'Johan',
    age: 21,
    isActive: true,
    hobbies: ['soccer, basketball, baseball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log( objectString );    
    }
}

person.toString();

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    color: 'white',
    year: 2021,
}

let smartTv = {
    brand: 'Samsung',
    model: 'HF14001',
    year: 2020, 
}

let youtubeVideo = {
    title: 'Ejercicio de objetos',
    isActive: true,
    likes: 100,
}

console.log( car );
console.log( smartTv );
console.log( youtubeVideo );