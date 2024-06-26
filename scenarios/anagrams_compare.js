const prompt = require('prompt-sync')();

var a=prompt("enter a string 1: ")
var b=prompt("enter a string 2: ")

function compare(a,b){
    if(a.length!==b.length){
        return false
    }
     return a.toLowerCase().split("").sort().join('')===b.toLowerCase().split("").sort().join('')
 }
 console.log(compare(a,b))
