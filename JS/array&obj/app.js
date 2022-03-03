const metalBands = ['Iron Maiden', 'Gojira', 'Trivium']
const band = 'Metallica'

//Type of
// console.log(typeof true);
// console.log(typeof 3);
// console.log(typeof '3');
// console.log(typeof metalBands);
// console.log(new Date());
// console.log(typeof new Date());

// const result = metalBands.length;
// let result = metalBands.length;
// result = band[1];
// result = metalBands[1];
// const result = metalBands.push(band);

// // let result = metalBands.join(',');
// let result = metalBands.pop();

// console.log(metalBands);
// console.log(result);

//comparison operators 

// let age = 27;

//loose comparison
// console.log(age == '27');
// console.log(age != 24);
// console.log(age <= 24);
// console.log(age >= 24);
// console.log(age != 24);

//strict comparison
// console.log(age === '27');
// console.log(age !== '27');


//HOISTING

//function decleration 
// function sayMyName(name) {
//     return name;
// }

//function expression 
// const sayMyName = function (name) {
//     return name;
// }

//arrow function
// const sayMyName = (name) => {
//     return name
// }

// const sayMyName = name => name

// const result = sayMyName('Dave');

// let user = {
//     name: 'Axl',
//     surname: "Rose",
//     age: 28,
//     isDeleted: false
// };

let user = {
    name: 'Axl',
    surname: "Rose",
    age: 28,
    isDeleted: false,
    adress: {
        city: 'Istanbul',
        country: 'Turkey'
    }
};

//Spread operator
// let arr = [1, 2, 6]

// let arr2 = ['Red Hot Chili', 'Guns n roses']

// const elem = [2, ...arr]
// console.log(elem);

// const user = {
//     name: 'Korhan',
//     surname: 'Kosece'
// }

// console.log({ ...user, isValid: true, user: user, array: arr });

// console.log(user.adress.city);