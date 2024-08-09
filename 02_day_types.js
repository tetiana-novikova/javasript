let challenge =  '30 Days Of JavaScript'
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let string = 'You cannot end a sentence with because because because is a conjunction'
let challengeWithSpace = ' 30 Days Of JavaScript '
let patternA = /a/gi  
let challengePart1 =  '30 Days Of'
let challengePart2 = 'JavaScript'

console.log("2.Print the string: "+ challenge) 
console.log("3.Print the length of the string: " + challenge.length)
console.log("4.Change all the string characters to capital letters: "+ challenge.toUpperCase()) 
console.log("5.Change all the string characters to lowercase letters: " + challenge.toLowerCase()) 
console.log("6.Cut (slice) out the first word of the string: " + challenge.substring(0,2)) 
console.log("7.Slice out the phrase: " + challenge.substring(3,21)) 
console.log("8.Check if the string contains a word Script: "+ challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

console.log(companies.split(',')) 

console.log(challenge.replace('JavaScript', 'Python')) 
console.log(challenge.charAt(15))  
console.log(challenge.charCodeAt(challenge.indexOf('JavaScript'))) 
console.log(challenge.indexOf('a'))  
console.log(challenge.lastIndexOf('a'))  

console.log(string.indexOf('because'))
console.log(string.lastIndexOf('because'))
console.log(string.search('because'))  

console.log(challengeWithSpace)
console.log(challengeWithSpace.trim(' '))

console.log(challenge.startsWith('30')) 
console.log(challenge.endsWith('Script')) 


console.log(challenge.match(patternA)) 
console.log(challengePart1.concat(" ",challengePart2))
console.log(challenge.repeat(2))



//level 2

console.log('%cThe quote '+'%c\'There is no exercise better for the heart than reaching down and lifting people up.\' '+ '%cby John Holmes teaches us to '+ '%chelp '+ '%cone another.', 'color:#1F2328','color:#0A3069', 'color:#1F2328', 'color:#0550AE', 'color:#1F2328')

console.log('%c\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"', 'color:#0A3069')

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')==typeof(10))
let num = '10'
let numInt = Number(num)
console.log(typeof(numInt)==typeof(10))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')==10)
let num2 = '9.8'
let numInt2 = Number(Math.round(num2,1))
console.log(numInt2==10)

//Check if 'on' is found in both python and jargon
let string2 = 'python, jargon'
console.log(string2.match(/on/gi).length==2)

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
console.log(string2.match(/jargon/gi) !=null)

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))

//Generate a random number between 50 and 100 inclusively.
let range = {min: 50, max: 100}
let delta = range.max - range.min
console.log(Math.round(range.min + Math.random() * delta))

//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))

//Access the 'JavaScript' string characters using a random number.
let string3 = 'JavaScript'
console.log(string3[Math.floor(Math.random() * string3.length)])

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
console.log(`${a} `.repeat(5))
console.log(`${b} ${a} ${b} ${b**2} ${b**3}`)
console.log(`${c} ${a} ${c} ${c**2} ${c**3}`)
console.log(`${d} ${a} ${d} ${d**2} ${d**3}`)
console.log(`${e} ${a} ${e} ${e**2} ${e**3}`)

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string4 = 'You cannot end a sentence with because because because is a conjunction'
let world = 'because '
console.log(string4.replace(string4.substr(string4.indexOf('because'),world.length*3), ''))