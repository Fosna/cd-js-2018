// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

// Example

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";

// Piece of code above is equivalent to the piece of code below.

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";


function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
