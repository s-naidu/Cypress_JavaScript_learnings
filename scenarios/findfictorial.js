const prompt = require('prompt-sync')();

const inputnum=prompt("enter the number  ")
var fact=1;
if(inputnum<0){
    console.log(`Please reenter positive value ,currently you enterd negative value  ${inputnum} `)
}else{
    for(let i=1;i<inputnum;i++){
        fact=fact*i
    }
   console.log(`enter number ${inputnum}factorial is ${fact} `)
}