function uniqueCharactersCheck(inputString) {
  const chaSet = new Set();

  for (const char of inputString) {
      if (chaSet.has(char)) {
          console.log("The input string contains duplicates.");
          return false;
      }
      chaSet.add(char);  
  }
  console.log("The input string contains only unique characters.");
  return true;
}
uniqueCharactersCheck("Mithun")
uniqueCharactersCheck("Maya")