const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// forEach method
function myFunction(value) {
  console.log(value);
}
fruits.forEach(myFunction);

// object arrays
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = "40"

console.log(person, Array.isArray(person), person instanceof Array);






