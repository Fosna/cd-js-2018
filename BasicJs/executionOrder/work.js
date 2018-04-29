for (
    var i = 0; // initialization
    i < 3; // check
    i = i + 1 // increment
) {
    
    console.log(i);
}

console.log("Done");

/*
2: i = 0

***Loop round 1***
3: 0 < 3
3: true

7: console.log(0) =>

4: i = 0 + 1
4: i = 1


*** Loop round 2***
3: 1 < 3
3: true

6: console.log(1) => 

4: i = 1 + 1
4: i = 2


*** Loop round 3***
3: 2 < 3
3: true

7: console.log(2) =>

4: i = 2 + 1
4: i = 3


*** Loop round 4***
3: 3 < 3
3: false

*** Loop end***

10: console.log("Done") => 


output: 
0
1
2
Done
 */