// Combine the if statements into a single if/else statement.

// Example
// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  if (val <= 5) {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

