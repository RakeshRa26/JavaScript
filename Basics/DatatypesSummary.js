
// Primitive Data Types

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3516546548742231n;



// Reference DataTypes (Non Primitive)

// Array

const heros = ["Ram", "Yash", "Allu Arjun"];

// Objects

let myObj = {
    name: "Rakesh",
    age: 25,
}

// Functions

const myFunction = function(){
 
    console.log("Hello World");
    
}

console.log(typeof myFunction)
