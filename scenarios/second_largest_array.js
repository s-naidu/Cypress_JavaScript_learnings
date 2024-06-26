function secondLargest(arr){
    arr.sort((a,b)=>b-a)
    return arr[1]
}
console.log(secondLargest([1,2,4,56,8,7,66]))