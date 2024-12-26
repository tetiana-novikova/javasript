// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Tetiana'
const lastName = 'Novikova'
const country = 'Ukraine'
const city = 'Kyiv'
const age = 35
const isMarried = true
const year = 1988

console.log("Type of firstName: " + typeof(firstName))
console.log("Type of lastName: " + typeof(lastName))
console.log("Type of country: " + typeof(country))
console.log("Type of city: " + typeof(city))
console.log("Type of age: " + typeof(age))
console.log("Type of isMarried: " + typeof(isMarried))
console.log("Type of year: " + typeof(year))

// 2. Check if type of '10' is equal to 10
console.log("Is type of '10' is equal to 10?: " + (typeof('10') === typeof(10)))

// 3. Check if parseInt('9.8') is equal to 10
console.log("Is parseInt('9.8') is equal to 10?: " + (parseInt('9.8') === 10))

// 4. Boolean value is either true or false.

// i. Write three JavaScript statement which provide truthy value.
console.log("True statement 1: "+ (typeof(firstName) === typeof(lastName)))
console.log("True statement 2: "+ (isMarried=== true))
console.log("True statement 3: " + ((2+2) === 4))

// ii. Write three JavaScript statement which provide falsy value.
console.log("False statement 1: "+ (typeof(firstName) === typeof(age)))
console.log("False statement 2: "+ (3.11 > 3.4))
console.log("False statement 3: "+ (1 === false))

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("1. My answer: true "  + "Real answer: " + (4 > 3))
console.log("2. My answer: true "  + "Real answer: " + (4 >= 3))
console.log("3. My answer: false "  + "Real answer: " + (4 < 3))
console.log("4. My answer: false "  + "Real answer: " + (4 <= 3))
console.log("5. My answer: true "  + "Real answer: " + (4 == 4))
console.log("6. My answer: true "  + "Real answer: " + (4 === 4))
console.log("7. My answer: false "  + "Real answer: " + (4 != 4))
console.log("8. My answer: false "  + "Real answer: " + (4 !== 4))
console.log("9. My answer: true "  + "Real answer: " + (4 != '4'))
console.log("10. My answer: true "  + "Real answer: " + (4 == '4'))
console.log("11. My answer: false "  + "Real answer: " + (4 === '4'))
//Find the length of python and jargon and make a falsy comparison statement.
console.log("12. False state for words length: " + ('python'.length != 'jargon'.length))

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("1. My answer: true "  + "Real answer: " + (4 > 3 && 10 < 12))
console.log("2. My answer: false "  + "Real answer: " + (4 > 3 && 10 > 12))
console.log("3. My answer: true "  + "Real answer: " + (4 > 3 || 10 < 12))
console.log("4. My answer: true "  + "Real answer: " + (4 > 3 || 10 > 12))
console.log("5. My answer: false "  + "Real answer: " + (!(4 > 3)))
console.log("6. My answer: true "  + "Real answer: " + (!(4 < 3)))
console.log("7. My answer: true "  + "Real answer: " + (!(false)))
console.log("8. My answer: false "  + "Real answer: " + (!(4 > 3 && 10 < 12)))
console.log("9. My answer: true "  + "Real answer: " + (!(4 > 3 && 10 > 12)))
console.log("10. My answer: true "  + "Real answer: " + (!(4 === '4')))
//There is no 'on' in both dragon and python
console.log(('dragon'.includes('on') && 'python'.includes('on')) === false)

//7. Use the Date object to do the following activities
const now = new Date()
const firstJanuary = new Date(1970, 1, 1);
console.log("What is the year today? "+ "Answer: " + now.getFullYear())
console.log("What is the month today as a number? "+ "Answer: " + (now.getMonth()+1))
console.log("What is the date today? "+ "Answer: " + now.getDate())
console.log("What is the day today as a number? "+ "Answer: " + now.getDay())
console.log("What is the hours now? "+ "Answer: " + now.getHours())
console.log("What is the minutes now? "+ "Answer: " + now.getMinutes())
console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now: "+ (now - firstJanuary)/1000)