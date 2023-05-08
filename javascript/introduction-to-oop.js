// OOP

// purchase1 object

/*
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() { // functions inside objects are known as methods
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation)
    }
}
*/

// purchase2 object

/*
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}
*/

// purchase1 object (improved)

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}

// purchase2 object (improved)

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase2.totalPrice();


