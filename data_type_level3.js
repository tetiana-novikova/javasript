// task 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string5 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let patternLove = /love/gi
console.log("The number of \'love\' is: " + string5.match(patternLove).length)

//task 2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string6 = 'You cannot end a sentence with because because because is a conjunction'
let patternBecause = /because/gi
console.log("The number of \'because\' is: " + string5.match(patternLove).length)

//task 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let specialCharacters = /[`~!@#$%^&*()_|+\-=?;:'"<>]/gi
let cleanedSentence = sentence.replace(specialCharacters,"")
console.log(cleanedSentence)

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/
let array = sentence2.match(/\d+/g)
console.log("The total annual income is: " + array.map(Number).reduce((a, b) => a + b, 0))