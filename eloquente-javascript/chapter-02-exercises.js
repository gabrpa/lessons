// 1

/*
function printHash() {
    for (var hash = "#"; hash.length <= 7; hash = hash + "#") {
        console.log(hash)
    }
}
printHash();
*/

// 2

/*
for (var i = 1; i <= 100; i++)
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log(i, "Fizz");
    }
    else if (i % 5 == 0) {
        console.log(i, "Buzz");
    }
    else {
        console.log(i);
    }
*/

// 2

/*
chessboard = num => {
    // create an empty string
    let output = ""
    // set an out loop for rows
    for (i=1; i<=num; i++) {
        // set an inner loop for columns
        for (j=1; j<=num; j++) {
            // check if sum of the counters is even using a ternary operator:
            // if yes, put a space
            // it not, put a hash
            ((i + j)%2==0 ? output += " " : output += "#")    
        }
        // add a newline character to separate rows in the outer loop
        output += "\n"
    }
    // print the chessboard to the console
    console.log(output)
}

chessboard(8)
*/