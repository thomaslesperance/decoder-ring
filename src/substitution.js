// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  //Helper function for lowercase and split
  const formatInput = input => input.toLowerCase().split("");

  //Helper function for encoding
  function encodeCiper(input, alphabet) {
    return formatInput(input).map(char => {
      if(char === " ") return char;
      return alphabet[standardAlphabet.indexOf(char)];
    }).join("");
  }

  //Helper function for decoding
  function decodeCipher(input, alphabet) {
    return formatInput(input).map(char => {
      if(char === " ") return char;
      return standardAlphabet[alphabet.indexOf(char)];
    }).join("");
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //Check if alphabet is 26 char long or return false
    if(!alphabet || alphabet.length !== 26) return false;

    //Ignore capital letters and form an array of char
    formattedAlphabet = formatInput(alphabet);
    
    //Check if every char in alphabet is unique or return false
    const isntUnique = formattedAlphabet.some(char => {
      const matches = formattedAlphabet.filter(item => item === char); 
      return matches.length > 1;
    });

    if(isntUnique) return false;

    return encode ? encodeCiper(input, formattedAlphabet): 
                    decodeCipher(input, formattedAlphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
