// Do a paper exercise

for (
    var i = 0; // initialization
    i < 3;  // condition
    i = i + 1 // increment
    ) { 
    
    console.log(i);
}

console.log("That's enough!");

/*
Initialization is executed only once. It'll be skipped in next rounds.
4: i = 0 

***First round***
Checking condition is executed before every loop round (loop pass).
5: 0 < 3
5: true

Increment is executed at the end of loop round. It's skipped right now.
Next command is first command in loop body. Loop body is between "{" and "}".

9: console.log(0) => 

End of loop is reached. Increment is executed.
6: i = 0 + 1
6: i = 1


***Second round***
Next loop round begins.
Initialization is skipped. It's executed only once. Before first loop round.
Condition is checked.

5: 1 < 3
5: true

Next command is first command in loop body.
9: console.log(1) => 

End of loop is reached. Increment is executed.
6: i = 1 + 1
6: i = 2


***Third round***
Next loop round begins.
Condition is checked.
5: 2 < 3
5: true

Next command is first command in loop body.
9: console.log(2) => 

End of loop is reached. Increment is executed.
6: i = 2 + 1
6: i = 3


***Fourth round***
Next loop round begins.
Condition is checked.
5: 3 < 3
5: false

Condition is not met. Loop exits. Next command is first after loop body.

12: console.log("That's enough!") =>


output: 
0
1
2

"That's enough!"

*/



// Check great resource http://carpediem.hr/PublikacijeCarpeDiem/Publikacije/JavaScript%20skripta.pdf