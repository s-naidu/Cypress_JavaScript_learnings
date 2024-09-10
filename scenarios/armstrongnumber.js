const prompt = require('prompt-sync')();

var number = prompt("enter the number ")
var temp = number
var lengthofnumber = number.toString().length
var sum = 0
while (temp > 0) {
    var digit = temp % 10
    sum += digit ** lengthofnumber
    temp = parseInt(temp / 10)
}
if (sum == number) {
    console.log(`${number} is a arm number`)
} else {
    console.log(`${number} is not a arm number`)
}