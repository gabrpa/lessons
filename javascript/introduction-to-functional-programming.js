// functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

// When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

// In functional programming, functions return new values and then use those values somewhere else in the code.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <======= THIS HERE!

/*
Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
*/

var virtualPet = {
    sleepy: true,
    nap: function() {}
}

/*
In OOP, methods update properties stored in the object instead of generating new return values.

For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
*/

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}

console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

/*
OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".

Note that the goal here is not to discuss OOP in depth; instead, I just want to show you the simplest explanation of what it is and how it works, in order to make the single most important distinction between FP and OOP.

To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.
*/