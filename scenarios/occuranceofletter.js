const prompt = require('prompt-sync')();

var string=prompt("enter the string ")
var letter=prompt("enter the letter ")

var strlength=string.length

var count=0
for(let i=0;i<=strlength;i++){
    if(string[i]==letter)
    count++
}
console.log(`in enterted string ${string} given ${letter} count is ${count}`)