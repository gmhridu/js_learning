// how many times Hridoy word has been used?
// And in which position 1st "Hridoy" has gotten?

const sentence =
  "Learn with Hridoy is all about teaching web development skills and techniques in an efficient and practical manner. If you just getting started in web development, Learn with Hridoy has all the tools you need to learn the newest and most popular technologies to covert you from a no stack to full stack to full stack developer. Learn with Hridoy also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches = sentence.match(/hridoy/gi);
const occurances = matches ? matches.length : 0;

console.log(occurances);

let position = sentence.search(/hridoy/i);
position = position >= 0 ? position : "not found!";

console.log(position);

//  input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function ti implement kore dekhan

function linearSearch(arr, val) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return "not found!";
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));

// find longest string from array and the index number

function longestString(names) {
  let longestWords = "";

  for (naam of names) {
    if (naam.length > longestWords.length) {
      longestWords = naam;
    }
  }

  return [longestWords, names.indexOf(longestWords)];
}

console.log(
  longestString(["Sumit Saha", "Learn with sumit", "Akash", "saad", "Daiyan"])
);

//১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন।

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (1 % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

// Array থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি?

const mixedArr = [
  "lws",
  undefined,
  "learn with sumit",
  false,
  "",
  "apple",
  40,
  "k",
  true,
  "Thanks all",
  NaN,
];

// const trueArray = mixedArr.filter(function(el){
//   if(el){
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArray = mixedArr.filter(Boolean);

console.log(trueArray);

// Object থেকে falsy value কিভাবে বের করে বাদ দিতে পারি ?

const obj = {
  a: "lws",
  b: undefined,
  c: "learn with sumit",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "k",
  i: true,
  j: "Thanks all",
  k: NaN,
};

const truthObject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }

  return obj;
};

console.log(truthObject(obj));

//constructor function
function Person(first, last, age){ 
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
};

const sumit = new Person('sumit', 'saha', 35);
const jasim = new Person('Jasim', 'Uddin', 32);
const rahim = new Person('Rahim', 'Islam', 30);

console.log(jasim.fullName());

// make an object iterable

const myNumbers = {};

myNumbers[Symbol.iterator] = function(){
  let n = 0;
  let done = false;

  return {
    next(){
      n += 10;
      if(n == 100) {done = true};
      return {
        value: n,
        done: done
      }
    }
  }

}

for (let num of myNumbers) {
  console.log(num);
}

