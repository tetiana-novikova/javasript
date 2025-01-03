const prompt = require("prompt-sync")();

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let m1 = 2
let b = -2
console.log("The slope is: " + m1)
console.log("The y-intercept is: " + "(0;"+ b+ ")")
console.log("The x-intercept is: " + "("+ -m1/b + ";0)")

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
var A = [2, 2];
var B = [6, 10];
function slope(a, b) {
    if (a[0] == b[0]) {
        return null;
    }

    return (b[1] - a[1]) / (b[0] - a[0]);
}
var m2 = slope(A, B);
console.log(m2);

// 7.Compare the slope of above two questions.
if (m1<m2) {
    console.log("The slope from question 2 is bigger that slope from question 1");
}
if (m2<m1){
    console.log("The slope from question 1 is bigger that slope from question 2");
}
if (m2 == m1){
    console.log("The slopes are equal");
}

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function formula (k) {
    return k*k+6*k+9;
}
let x = 0;
y1 = formula(x);
y2 = formula(x+1);
if (y1<y2){
do {
 var y = formula(x);
  x--;
} while (y != 0);
console.log(x+1);
}
else {
    do {
        var y = formula(x);
         x++;
       } while (y != 0);
       console.log(x-1);
}

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
//check input data
if ((isNaN(hours*rate)) || hours<0 || rate<0) 
    console.log("Provided data are invalid");
else 
    console.log("Your weekly earning is " +(hours*rate));

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Please provide your name: ");

while (name.length > 7) {
    console.log("Your name is long.");
    name = prompt("Enter your name in short: " );
}

//11. Compare your first name length and your family name length and you should get this output.

let firtsName = prompt("Please provide your first name: ");
let familyName = prompt("Please provide your family name: ");

if (familyName.length < firtsName.length){
    console.log("Your first name, " + firtsName + " is longer than your family name, " +familyName);
}
else {
    if (familyName.length > firtsName.length){
    console.log("Your family name, " + familyName + " is longer than your first name, " + firtsName);
}
else {
    console.log("Your first name, " + firtsName + " and your family name, " +familyName + " have equal length");
}
}

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
let diffrence = myAge-yourAge;
console.log("I am " + diffrence + " years older than you.");

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt("Enter birth year: ");
var currentTime = new Date();
var year = currentTime.getFullYear();
let age = year-birthYear;

if ((birthYear <= 0) || isNaN(birthYear)){
    console.log("Provided data are invalid");
}
else {
    if (age >=18) {
    console.log("You are " + age + ". You are old enough to drive.");
}
else {
    let yearsToStart = 18 - age;
    console.log("You are " + age +  ". You will be allowed to drive after " + yearsToStart +" years.");
}
}


// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numberOfYears = prompt("Enter number of years you live: ");
let secondsInYear = 31536000;
let lived = numberOfYears*secondsInYear;

if ((numberOfYears <= 0) || isNaN(numberOfYears)){
    console.log("Provided data are invalid");
}
else {
    console.log("You lived " + lived + " seconds.");
}

//15. Create a human readable time format using the Date time object YYYY-MM-DD HH:mm; DD-MM-YYYY HH:mm; DD/MM/YYYY HH:mm
var yourDate = new Date();
var curr_date = yourDate.getDate();
var curr_month = yourDate.getMonth();
var curr_year = yourDate.getFullYear();
var curr_hours = yourDate.getHours();
var curr_minutes = yourDate.getMinutes();
yourDate.setSeconds(0,0);
console.log("YYYY-MM-DD HH:mm format: " + yourDate.toISOString().split('.')[0]);
console.log("DD-MM-YYYY HH:mm format: " + curr_date + "-" + curr_month + "-" + curr_year + " " +curr_hours + ":" + curr_minutes );
console.log("DD/MM/YYYY HH:mm format: " + yourDate.toLocaleString('en-GB'));