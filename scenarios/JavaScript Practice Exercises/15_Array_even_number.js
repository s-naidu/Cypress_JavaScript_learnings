let arr=[20,12,23,13,45]
function ArrayEvenNumber(arr){
    return arr.filter(num=>num%2===0)
}
console.log(ArrayEvenNumber(arr))
console.log(arr)