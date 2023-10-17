// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const lowerCharBoundary = 97; //unicode "a"
  const upperCharBoundary = 122; //unicode "z"

  //Create cipher helper function that can be used forward and backward later
  function cipher(charCode, shift) {
    let newCode = charCode + shift;
    if(newCode < lowerCharBoundary) newCode = upperCharBoundary - (lowerCharBoundary - (newCode + 1));
    if(newCode > upperCharBoundary) newCode = lowerCharBoundary + ((newCode - 1) - upperCharBoundary);
    return String.fromCharCode(newCode);
  }

  function caesar(input, shift, encode = true) {
    // your solution code here

    //Return false if given an invalid shift value or an empty string if given an empty/no message string
    if(!shift || shift <-25 || shift > 25) return false;
    if(input.length === 0) return "";

    //Convert all to lowercase and push all characters into an array
    const messageCharactersArray = input.toLowerCase().split("");

   return messageCharactersArray.map(char => {
      const charCode = char.charCodeAt(0);
      let newChar;
      //Determine new character either by returning non-letter character or running cipher forward/backward
      if(charCode < lowerCharBoundary || charCode > upperCharBoundary) return char;
      return encode ? cipher(charCode, shift): cipher(charCode, shift * -1)
    }).join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
