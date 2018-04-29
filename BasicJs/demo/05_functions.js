// function declaration
function foo() {
    console.log("foo function");
}
foo();


// passing argument to a function
function foo(bar) {
    console.log("foo function with argument: " + bar);
}
foo("ant");
foo("bee");

// function can have multiple arguments
function foo(bar, baz) {
    console.log("foo function with argument: " + bar);
    console.log("foo function with another argument: " + baz);
}

foo("ant", "bee");
foo("cow", "dog");


// Function can return value.
function sum(x, y) {
    var sumResult = x + y;
    return sumResult;
}

var ant = sum(5, 10);
console.log(ant);


// Alternative way to define function 
var bee = function() {
    console.log("I'm bee function.");
}
bee();

// Do scope demo first. After that students should work on exercises.
