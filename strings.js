let x = "John";
let y = new String ("John");
let z = (x == y);

console.log(z);

let a = new String ("John");
let b = new String ("John");
let c = (a == b);

console.log(c);

let str = "Apple, Banana, Kiwi";

console.log(str.slice(7, 13));
console.log(str.slice(15, 19));
console.log(str.slice(-12, -6));


// replace method
let text = "Please visit Microsoft";
let newText = text.replace("Microsoft", "VSCODE");

console.log(newText);

// concat method

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ", text2);

console.log(text3);

// text split

let texth = "Hello World";
console.log(texth.split(","));
console.log(texth.indexOf("World")); //String Search
