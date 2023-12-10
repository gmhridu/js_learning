const person = {fname: "John", lname: "Doe", age: 25};

for(let x in person) {
  console.log(person[x]);
}

const numbers = [45, 4, 9, 16, 25];

for (let number in numbers){
  console.log(numbers[number]);
}

// for of loop
let a = [4, 5, 7, 9, 10];

for (let x of a){
  console.log(x);
}

// while loop
let i = 0;
let text = "";

while (i < 10) {
  text += "The number is " + i;
  i++;
}

console.log(text);

// do while loop

let x = 10;
let texts = "";

do {
  texts += "The number is " + i;
  i++;
} while (i < 10);

console.log(texts);

// new set Iterator

const mySet = new Set ();

mySet.add("a");
mySet.add("b");
mySet.add("c");
mySet.add("d");

console.log(mySet);


// create a map
const fruits = new Map();

// set a map value
fruits.set("apples", 500);
fruits.set("bananas", 200);
fruits.set("oranges", 300);
// fruits.delete("lemon", 300);

console.log(fruits);

const fruit = new Map ([
  ["apple", 500],
  ["banana", 200],
  ["orange", 300],
]);

// list all entries
let price = "";
for (const x of fruit.entries()){
  price += x;
};

console.log(price);

function isArray(myArray) {
  console.log(myArray.constructor === Array);
}

isArray([1, 2, 3]);

let d = {fname: "Fjhon"};

console.log(typeof d.toString());


