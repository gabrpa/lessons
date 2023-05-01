// Task 1: Code a function declaration

// Task 2: Invoke the addTwoNums function with a number and a string

// Task 3: Update the addTwoNums function with a try...catch block

// Task 4: If the passed-in arguments are not numbers, throw an error

// Task 5: 


function addTwoNums (a, b) {
    try {
        if (typeof(a) != "number") {
            throw new ReferenceError("the first argument is not a number")
        } 
        else if (typeof(b) != "number") {
            throw new ReferenceError ("the second argument is not a number")
        }
        else {
            console.log(a + b, "It still works");
        }
    }
        catch(err) {
            console.log("Error", err);
        }     
}   

addTwoNums(23, "7");