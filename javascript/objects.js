// Object Literals


var assistanteManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}


// Dot Notation


assistanteManager.nextAchievement = "get promoted";

var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money"

console.log(storeManager);


// Brackets Notation


var house2 = {};
house2["rooms"] = 4;
house2['color'] = "pink";
// With the brackets notation, I can add space characters inside property names, like this:
house2["number of doors"] = 4;
// Additionally, I can add numbers (as the string data type) as property keys:
house2["1985"] = 2023
// However, doing this is discouraged, 
// due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.


console.log(house2);


/* Finally, 
there's one really useful thing that bracket notation has but is not available in the dot notation:
It can evaluate expressions.
To understand what that means, consider the following example:
*/
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

/* Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

- The value of i was 0 

- The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

- Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.

*/