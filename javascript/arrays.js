// Storing data in arrays

/*
var train1 = ["wheat", "barley", "salt", "potato", "rocks"];

var train2 = ["rice", "beans"];

console.log(train1[4]);
console.log(train2[1]);
*/

// function declaration (build) and function invocation (call)


function listArrayItems(arr) {
    // I've declared a listArrayItems function, and I've set it up to accept a single parameter, arr - which stands for an array.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato")
        } else {
            console.log(i*100, arr[i])
        }
 //       console.log(i+1, arr[i]); //display the array item where the index is equal to i
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

listArrayItems(colors);
