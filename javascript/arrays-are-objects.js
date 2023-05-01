/*
Arrays are objects
In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

To add new items to an array, I can use the push() method:
*/

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

// To remove the last item from an array, I can use the pop() method:

fruits.pop();
console.log(fruits); // ['apple']

/*
Tying into some earlier lessons in this course, 
I can now build a function that takes all its arguments and pushes them into an array,
like this:
*/

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');

console.log(simpleArr);