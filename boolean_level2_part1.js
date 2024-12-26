const prompt = require("prompt-sync")();

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let b = prompt("Enter base: ")
let h = prompt("Enter height: ")

//check input data
if ((isNaN(0.5*b*h)) || b<0 || h<0) 
    console.log("Provided values are invalid");
else 
    console.log("The area of the triangle is " +(0.5*b*h));

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseFloat(prompt("Enter side a: "))
let sideB = parseFloat(prompt("Enter side b: "))
let sideC = parseFloat(prompt("Enter side c: "))
if ((sideA <= (sideB + sideC)) && (sideB <= (sideA + sideC)) && (sideC <= (sideA + sideB)))
    console.log("The perimeter of the triangle is: " + (sideA + sideB + sideC));
else
console.log("Provided values are invalid")

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = parseFloat(prompt("Enter length: "))
let width = parseFloat(prompt("Enter width: "))
if ((isNaN(length*width)) || length<0 || width<0) 
    console.log("Provided values are invalid");
else
console.log("The area of the rectangle is: " +(length*width) + " and the perimeter of the rectangle is: "+ (2*(length*width)));


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14
let radius = parseFloat(prompt("Enter radius: "))
if ((isNaN(radius*radius)) || length<0 || width<0) 
    console.log("Provided values are invalid");
else
console.log("The area of the circle is: " + (pi*radius*radius).toFixed(2) + " and the circumference of a circle is: "+ (2*pi*radius).toFixed(2));