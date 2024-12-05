var string='sudarshan'
//Method 1 :const reverse=string.split('').reverse().join('')
//console.log(reverse)

//method 2

//var rev=''
//for(let i of string){
//    rev=i+rev
//}
//console.log(rev)

//Method 3
var lengthofstring=string.length
var rev=''
for(let i=lengthofstring-1;i>=0;i--){
    rev=rev+string.charAt(i)
}
console.log(rev)

