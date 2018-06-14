// const person = {
//     name: 'Durga',
//     age: 46,
//     location: {
//         city: 'Bangalore',
//         temp: 30
//     }
// }

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp} = person.location;
// console.log(`It's ${temp} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holidya',
//     publisher:{
//         name : 'Penguin'
//     }
// }

// const {name:publisherName = "self-published"} = book.publisher;

// console.log(publisherName);

const address = ['109 Blue Lotus Apartmetn', 'Panathur', 'Bangalore', 'Karnataka','560103'];

const [, , city, state = 'Karnataka'] = address

console.log(`Your are in ${city}, ${state}.`);