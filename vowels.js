const vowels = ["a", "e", "i", "o", "u", "g", "k", "j"];

function countVowelsInArray(vowels) {
  let count = 0;

  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === "a" ||
        vowels[index] === "e" ||
        vowels[index] === "i" ||
        vowels[index] === "o" ||
        vowels[index] === "u"
        ){
count++; 
    };
  }
return count;
}

// const answer = countVowelsInArray(vowels);
console.log(countVowelsInArray(vowels));