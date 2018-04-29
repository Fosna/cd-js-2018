// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  
  var result = celsius * 9 / 5 + 32;
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
var output = convertToF(10); 
console.log(output);



// convertToF(0) should return a number
// convertToF(-30) should return a value of -22
// convertToF(-10) should return a value of 14
// convertToF(0) should return a value of 32
// convertToF(20) should return a value of 68
// convertToF(30) should return a value of 86