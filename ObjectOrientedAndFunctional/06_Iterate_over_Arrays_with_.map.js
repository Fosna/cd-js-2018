// Skip. Advanced.

// Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.

// Example

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]



// Solution

var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray;
