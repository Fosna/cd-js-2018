﻿// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12

// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict("7"));
