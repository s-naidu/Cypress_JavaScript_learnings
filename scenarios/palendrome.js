const prompt = require('prompt-sync')();
var string=prompt("enter the string")
string=string.toLocaleLowerCase();
var palenstring=(str)=>{
    var revstring=string.split('').reverse().join('')
    if(revstring===string){
        return true
    }else{
        return false
    }
}
console.log(palenstring(string))