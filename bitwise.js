let binary = 48;

console.log(binary.toString(2));

console.log(-5 >> 1);

let text = "Visit Microsoft";
let result = text.replace("Microsoft", "W3schools");

console.log(result);

let x = 12;

try {
if (x == "") throw "empty"; 
if(isNaN(x)) throw "not a number";
x = Number(x);
if(x < 5) throw "too low";
if(x > 10) throw "too high";

} catch (error) {
console.log(error);
}

console.log("this is a test");

const person1 = {
fullName: () => {  //arrow function call
return person2.firstName + " " + person2.lastName;
}, 
};

const person2 = {
firstName: "John",
lastName: "Doe",
};

console.log(person1.fullName.call(person2));
