function printValue(value) {
    console.log(value);
}

console.log("first");
printValue(22);
console.log("third");

/*
Legend:
* - star means that this is done behind the sceene

5: console.log("first") =>
6: printValue(22)
--------------
1: * value = 22
2: console.log(22) =>
--------------
7: console.log("third") =>

output:
first
22
third

*/