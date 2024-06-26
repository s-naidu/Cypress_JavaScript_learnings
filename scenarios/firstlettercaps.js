const prompt = require('prompt-sync')();
var string=prompt("enter the string  ")
const firstletter=(str)=>{
    var newStr=str.split(" ")
    var newArr=newStr.map((val)=>{
        return val.charAt(0).toUpperCase()+val.slice(1)
    })
    return newArr.join(" ")
}
console.log(firstletter(string))