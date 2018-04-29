// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict("7"));

