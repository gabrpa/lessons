// Comparing var, let and const

// var keyword

// 1. We CAN access a var variable before initialization ...
    // ...as long as the var variable IS EVENTUALLY INITIALIZED
    // ...ANYWHERE in our code


// 2. We CAN declare and redeclare the same var variable without errors
// var user = "Mary";
// var user = "Joanna";
// var user = "Mark";

// let keyword

// 1. We CANNOT access a let variable before we declare it
// console.log(user); // Error!
// let user;

// 2. We CAN declare an unassigned variable with let
// let user;
// console.log(user);

// 3. we CAN'T redeclare a let variable
// let user = "Anna";

// 4. But we CAN re-assign it
// user = "Anna";
// console.log(user);

// const keyword

// 1. The const variable MUST BE INITIALIZED
// console.log(user); // Error!
// const user;

// 2. We CAN'T access the const variable before initialization
// console.log(user); // Unexpected token error
// const user = "Andrew";

// 3. We CAN'T redeclare a const variable
// user = "Anna";

// Pro tip

// use let if the value might change in the future
// use const if the value will never change