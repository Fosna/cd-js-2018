// Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

// Example

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";

// Piece of code above is equivalent to the piece of code below.

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";


function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
