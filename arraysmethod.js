const fruits = ["Banana", "Orange", "Apple", "Mango"];

let a = fruits.unshift("Pineapple");

let b = fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop());
console.log(fruits.push("Pineapple"));
console.log( a);
// console.log(delete fruits[2]);
console.log(b);

// concat method
const myGirls = ["Cecilie", "Lone", "Linus"];
const myBoys = ["Email", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);



