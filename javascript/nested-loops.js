// JavaScript nested loop


for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log("Week " + i + " day " + j)
    }
}

//　-------------------------------------------------------------------------------------------------

for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("-------", month);
    }
}


var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; croder-radius: 10px; border: 1px solid blue; background: pink;"
    console.log("%c" + cubes[i], styles)
}
