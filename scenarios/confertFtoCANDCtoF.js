const prompt = require('prompt-sync')();
const convertFtoCelvalue=prompt("enter the value  ")
//const result=convertFtoCelvalue*1.8+32;

var convertCeltoFharen=5/9*(convertFtoCelvalue-32)
console.log(convertCeltoFharen)