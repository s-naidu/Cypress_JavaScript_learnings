const prompt = require('prompt-sync')();
var num=prompt("enter the number ")
if(num==1){
    console.log(`${num} is not a primenumber neither composite`)
}else if(num<1){
    console.log(`Prime number ${num} is not possible`)
}else{
    for(let i=2;i<num;i++){
        if(num%2==0){
           var result= `${num} is not a prime number`
           break
        }else{
            var result=`${num} is a prime number`
        }
    }
    console.log(result)
}