const name = "Rakesh"

const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const fullName = new String("Rakesh-Rawal")

console.log(fullName[0]);
console.log(fullName.__proto__);
 

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(2));
console.log(fullName.indexOf('a'));


const newString = fullName.substring(0, 5) 
console.log(newString);


const anotherString = fullName.slice(-2, 6)
console.log(anotherString);

const newString1 = " Ram "
console.log(newString1);

console.log(newString1.trim());

const url = "https://rakesh.com/rakesh%20rawal"
console.log(url.replace('%20', '-'));

console.log(url.includes('rak'));

console.log(fullName.split('-'));





