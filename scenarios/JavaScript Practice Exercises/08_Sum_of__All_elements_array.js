//method 1

let arrNum=[1,2,3,4,5]
function arrsum(arr){
    var result= arr.reduce((pre,cur)=>pre+cur,0)
    console.log(result)
}
arrsum(arrNum)

//method 2

let arr=[1,2,3,4,5,6,7]
let arraysum=0
for(let i=0;i<arr.length;i++){
    arraysum+=arr[i]
    
}
console.log(arraysum)