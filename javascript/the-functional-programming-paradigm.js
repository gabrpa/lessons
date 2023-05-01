// First-class functions

/*
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

pass to other functions

save in a variable

return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

To explain how this works, consider the following program.
*/

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

/*
I start the program with the addTwoNums() function whose definition I've already used earlier in various variations. The reason why this function is a recurring example is because it's so simple that it helps explain concepts that otherwise might be a bit harder to grasp.

Next, I code a function named randomNum() which returns a random number between 0 and 10.

I then code another function named specificNum() which returns a specific number, the number 42.

Next, I save a variable named useRandom, and I set it to the boolean value of true. I declare another variable, named getNumber.

This is where things get interesting.

On the next several lines, I have an if else statement. The if condition is executed when the value of useRandom is set to true. If that's the case, the entire randomNum() function's declaration is saved into the getNumber variable. Otherwise, I'm saving the entire specificNum() function's declaration into the getNumber variable.

In other words, based on the useRandom being set to true or false, the getNumber variable will be assigned either the randomNum() function declaration or the specificNum() function declaration.

With all this code set, I can then invoke the addTwoNums() function, passing it the invocation of the getNumber() variables as its first and second arguments.

This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.

Note: most of the code inside the randomNum() function declaration comes from a previous lesson, namely the lesson that discussed the Math object in JavaScript.

This brings me to the second foundational concept of functional programming, which is the concept of higher-order functions.

*/

// Higher-order functions

/*
A higher-order function is a function that has either one or both of the following characteristics:

It accepts other functions as arguments

It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the addTwoNums() function so that it is a higher-order function:
*/

/*
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
*/

/*
You can think of the above function declaration of addTwoNums as describing how it will deal with the getNumber1 and getNumber2 inputs:
once it receives them as arguments, it will then attempt invoking them and concatenating the values returned from those invocations.

For example:
*/

/*
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
*/

// Pure functions and side-effects

/*
Another concept of functional programming are pure functions.

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the addTwoNums() function from the previous section:
*/

/*
... the output will always be the same.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

changing variable values outside of the function itself, or even relying on outside variables 

calling a Browser API (even the console itself!) 

calling Math.random() - since the value cannot be reliably repeated

The topic of pure and impure functions can get somewhat complex.

For now, it's sufficient to know that this concept exists and that it is related to functional programming.
*/

