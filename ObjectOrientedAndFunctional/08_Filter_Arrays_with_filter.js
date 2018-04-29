// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.


// Example

var array = [1,2,3,4,5,6,7,8,9,10];

array = array.filter(function(val) {
  return val !== 5;
});

console.log(array);


// Solution

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray;