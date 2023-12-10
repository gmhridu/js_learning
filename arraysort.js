const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

// Reversing sort
console.log(fruits.reverse());

// Numeric sort 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
})

// compare function
// points.sort(function (a, b) {
//   return b - a;
// });
  console.log(points);

  // sorting an array in random number

  const pointss = [40, 100, 1, 5, 25, 10];
  pointss.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  console.log(pointss);

  const numbers = [45, 4, 9, 16, 25];

  function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    }

  // array method
 numbers.forEach(myFunction);

//  Array.map Method

const number = [45, 4, 9, 16, 25];

function nyHype(value) {
return value * 2;
}

const newNumbers = number.map(nyHype);
console.log(newNumbers);





