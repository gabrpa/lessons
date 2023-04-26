// else & if statements


var age = 80;
if (age >=65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age is not numerical")
}


// switch statement

var day = "Sunday";

switch(day) {
    case "Monday":
        console.log("The week is just starting");
        break;
    case "Tuesday":
        console.log("Here we go again");
        break;
    case "Wednesday":
        console.log("Wednesday, nothing new");
        break;
    case "Thurday":
        console.log("Hold tight, its almost friday!");
        break;
    case "Friday":
        console.log("Its Fridaaaaaaaay");
        break;
    case "Saturday":
        console.log("Put your shoes on, and go live your life");
        break;
    case "Sunday":
        console.log("Last day to enjoy the weekend");
        break;
    default:
        console.log("There is no such day");
}