function verifyCanBuyAlcohol(age) {
    if (age < 18) {
        console.log("Can't buy. It's illegal!");
    } else {
        console.log("Ok, but don't dink and drive.");
    }
}

verifyCanBuyAlcohol(16);
verifyCanBuyAlcohol(18);
verifyCanBuyAlcohol(70);



function verifyApplication(age) {
    if (age < 15) {
        console.log("Good, but a bit young.");
    } else if (age <= 30) {
        console.log("Perfect");
    } else {
        console.log("Good, but not perfect.");
    }
}

verifyApplication(12);
verifyApplication(15);
verifyApplication(21);
verifyApplication(30);
verifyApplication(45);


// Students should execute it on paper.
// Exercises up to and including 078_Counting_Cards.