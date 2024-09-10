let arraynum=[22,4,5,6,8,9,22]
function largest(arr){
    return arr.reduce((pre,cur)=>cur<pre?cur:pre)
}
let result=largest(arraynum)
console.log(result)
console.log(arraynum)