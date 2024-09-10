const prompt = require('prompt-sync')();

//method 1
var num=prompt("Please enter a number")
if(num%2==0){
    console.log(`${num} is even `)
}else{
    console.log(`${num} is odd `)
}

//method 2
//var num=prompt("Please enter a number")
function checkEvenOdd(num){
    if(num%2==0){
        return "EVEN"
    }
    else{
        return "OODD"
    }
}
console.log(checkEvenOdd(num))