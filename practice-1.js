// Get Random Number

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

console.log(getRandomNumber(1, 6));

// Array Alphabetically 

const students = ["Sumit", "Saad", "Daiyan", "Akash"];

console.log(students.sort());

const roll_numbers = [3, 5, 1, 6, 2, 30];

console.log(roll_numbers.sort(function(a, b) {
  return a - b;
}))

// Leap Year

function isLeapYear (year){
  if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
  console.log(`${year} is a leap year!`);
} else{
  console.log(`${year} is not a leap year!`);
}
}

isLeapYear(2028);


// sentence vowel 

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(countVowels("I Love Bangladesh"));

// find duplicate numbers
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = numbers.filter(function(value, index, array){
  return array.indexOf(value) !== index
});

console.log(duplicates);

// find unique numbers

const numberss = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicatess = numberss.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(duplicatess);

let age = 17;
// if (age >= 18){
//   console.log("You are adult!");
// } else {
//   console.log("You are not adult!");
// }

console.log(age >= 18 
  ? (age < 30) 
  ? "You are adult!" 
  : "You are old!" 
  : "You are young!");

  let myAge = 18;
  myAge = Number(myAge);

  if (isNaN(myAge)) {
    console.log("Input is not a number");
  } else {
    console.log(myAge < 18 ? "Too young" : "Old enough");
  };











