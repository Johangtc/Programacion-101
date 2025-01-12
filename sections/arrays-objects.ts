//arreglos de objetos


export interface Person {
    age: number;
    isActive: boolean;    
    name: string;
}

let johan: Person = {
    age: 21,
    isActive: true,
    name: 'Johan',
}

let carmela: Person = {
    age: 22,
    isActive: false,
    name: 'Carmela',
}

let yael: Person = {
    name: 'Yael',
    age: 23,
    isActive: false,
}

let people: Person[] = [ johan, carmela, yael ];

console.log(people);

for ( let i = 0; i <people.length ; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}