const prompt = require('prompt-sync')();

const string=prompt("enter string  ")
/*if(string=='a'||string=='e'||string=='i'||string=='o'||string=='u'){
console.log(`entered string ${string} is vowel`)
}else{
    console.log(`entered string ${string} is not vowel`)
}*/

const vowel=['a','e','i','o','u']
const vowelcount=(str)=>{
    var count=0
    for(let letter of str.toLowerCase()){
       if(vowel.includes(letter)) {
        count++
       }
    }
    return count
}
console.log(vowelcount(string))

