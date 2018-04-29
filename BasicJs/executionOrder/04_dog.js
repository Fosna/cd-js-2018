function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}

var name = "Miki";
var surname = "Kola";
var namesTogether = getFullName(name, surname);
console.log(namesTogether);

var differentNamesTogether = getFullName("Roko", "Rora");
console.log(differentNamesTogether);

/*

6: name = "Miki"
7: surname = "Kola"
8: namesTogether = getFullName("Miki", "Kola")
------------------
1: * firstName = "Miki"
1: * lastName = "Kola"
2: fullName = "Miki" + " " + "Kola"
2: fullName = "Miki Kola"
3: return "Miki Kola"
------------------
8: namesTogether = "Miki Kola"
9: console.log("Miki Kola") => 
11: differentNamesTogether = getFullName("Roko", "Rora")
------------------
1: * firstName = "Roko"
1: * lastName = "Rora"
2: fullName = "Roko" + " " + "Rora"
2: fullName = "Roko Rora"
3: return "Roko Rora"
------------------
11: differentNamesTogether = "Roko Rora"
12: console.log("Roko Rora") => 

output: 
Miki Kola
Roko Rora

*/