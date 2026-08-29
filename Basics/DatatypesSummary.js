
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


//**************************************************************** */

// Stack (Primitive), Heap (Non Primitive)

let myName = "Rakesh Rawal"

let anotherName = myName
anotherName = "mycode"

console.log(myName);

console.log(anotherName)
 

let user = {
    email: "user@gmail.com",
    phone: 9858858888,
}

let userTwo = user

userTwo.email = "rakeshrawal@gmail.com"


console.log(user.email);
console.log(userTwo.email);


