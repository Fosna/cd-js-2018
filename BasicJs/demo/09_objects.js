var dog = {
    name: "Camper",
    legs: 4,
    friends: ["Lua", "Rex"]
};

// Getting object data.
console.log("whole dog: ", dog);

console.log("dog name", dog.name);
console.log("dog name", dog["name"]);

console.log("dog legs", dog.legs);


// Getting object property. Property name is in variable.
var propertyName = "legs";
console.log("dog", propertyName, dog[propertyName]);


// Updating object data.
dog.name = "Chapi";
console.log("new dog name", dog.name);


// Exercise. Add another friend to this dog.


// Add new property to an object.
console.log("dog", dog);
dog.bark = "bow-wow";
console.log("dog", dog);


// Remove existing property from an object.
console.log("dog", dog);
delete dog.legs;
console.log("dog", dog);
console.log("dog legs", dog.legs);

console.log(dog.hasOwnProperty(dog.legs));
console.log(dog.hasOwnProperty(dog.friends));


// Get initials of first friend of the dog.
console.log("dog", dog);
var firstFriend = dog.friends[0];
console.log(firstFriend);
var firstFreindInitials = dog.firstFriend[0] + ".";
console.log(firstFreindInitials);


var oneLiner = dog.friends[0][0];
console.log(oneLiner);
// Do a paper exercise for oneLiner evaluation.


// Exercises up to and including 089_Accessing_Nested_Objects.