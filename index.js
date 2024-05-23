// x = 5;
var y = 15;
let z = 20;
const pi = 3.142;

// sum = x + y;
// console.log(sum)

// let a = (x + y) * pi
// console.log(a)

// DataTypes 

// String - handle Words or letters
// Number - handling figures
// // BigInt
// Boolean - handling true or false values
// undefined
// null
// // Symbol
// Object - blueprint

// numbers
let length = 15;
// string
let color = 'red';
let color2 = "Yellow";
// boolean 
let a = true;
let b = false;
// object
const person = {
    first_name: "Samuel",
    last_name: "Mbai",
    age: 20,
}

// Array 
const fruits = ["apples", "Mangoes", "Pineapples"]

// date object
// const date = new Date("2024-05-15")
// console.log(date)

// let x = 15
// x = 20
// console.log(x)

let first_name = "Abdi";
let last_name = "Omar"

// concatenation
fullname = first_name + " " + last_name
console.log(fullname)

let f = 5;
let g = 5;
let h = 6;
let j = "5";

console.log(f == g);
console.log(f == h);
console.log(f === j);
console.log(typeof (person));

// Functions 
function multiply(x, y) {
    return x * y
}

let product = multiply(5, 6)
// console.log(product)

// ES5 javascript
var sum = function (x, y) {
    return x + y
}

// console.log(sum(10,40))

// ES6 javascript - ECMAScript

const divide = (x, y) => x / y;
// console.log(divide(20,10))

const divide2 = (x, y) => {
    console.log("This is a division function");
    return x / y
}
// console.log(divide2(20,10))

// conditional statements
// 1. If...else statements
let hour = 20

// if (hour < 12) {
//     greeting = "Good Morning"
// } else if (hour > 12 ) {
//     greeting = "Good Afternoon"
// } else if ( hour > 18) {
//     greeting = "Good Evening"
// }
// we have a logical error 

if (hour < 12) {
    greeting = "Good Morning"
} else if (hour > 12 && hour < 18) {
    greeting = "Good Afternoon"
} else if (hour > 18) {
    greeting = "Good Evening"
}
console.log(greeting)


// 2. Switch Statements
day = 9

switch (day) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday"
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday"
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
    
}

console.log(day)

let logo = document.getElementById("nav-logo")
logo.innerHTML = "Hello world"
logo.style.color = "blue";

// let text = document.getElementsByTagName("h1")
// text.style.color = "blue";

function register(){
    return alert("User registered")
}