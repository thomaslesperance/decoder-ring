// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //Establish the matrix from which the ciphers will be executed
  const matrix = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "i/j", "o", "t", "y"],
    ["e", "k", "p", "u", "z"]
  ];

  //Helper function to create input character array with lowercase letters
  function stringSplitter(input) {
    return input.toLowerCase().split("");
  }

  //Define the helper function that will be called for each unit of input to be encoded
  function encodeCipher(input) {
    return stringSplitter(input).map(character => {
      if(character === " ") return character;

      //Deal with i/j being joined in matrix and return spaces
      if(character === "i" || character === "j") character = "i/j";

      //Find the index (of the outer array) for the array containing the character
      const innerArray = matrix.find(array => array.includes(character));
      const firstIndex = matrix.indexOf(innerArray);

      //Find the index (of the inner array) pointing to the character in the inner array
      const secondIndex = innerArray.indexOf(character);

      return `${firstIndex + 1}${secondIndex + 1}`;
    }).join("");
    
  }
  
  //Define the helper function that will be called for each unit of input to be decoded
  function decodeCipher(input) {
    const inputCharacters = stringSplitter(input);

    //Verify that input contains an even number of numbers
    const allNumbers = inputCharacters.filter(char => char !== " ");
    if(!Number.isInteger(allNumbers.length / 2)) return false;

    const numberPairs = [];

    //Combine input characters into pairs, exlcuding spaces
    for(let i = 0; i < inputCharacters.length; i += 2) {
      const char = inputCharacters[i];
      if(char === " ") {numberPairs.push(char); i--;}
      else {
        const newElement = char + inputCharacters[i + 1];
        numberPairs.push(newElement);
      }
    }

    //Reference matrix with each number pair from allNumbers array and transfer spaces as-is
    return numberPairs.map(unit => {
      if(unit === " ") return unit;
      const reference = unitIndex => Number.parseInt(unitIndex) -1;
      const innerArray = matrix[reference(unit[0])];
      return innerArray[reference(unit[1])];
    }).join("");
  }

  function polybius(input, encode = true) {
    // your solution code here
    return encode ? encodeCipher(input): decodeCipher(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };