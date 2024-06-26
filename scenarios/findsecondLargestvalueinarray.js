// const arrnum=[2,4,6,8,9]
// const largestvalue=(arr)=>{
//    firstlargest=Math.max(...arr)
//    index=arr.indexOf(firstlargest)
//    arr.splice(index,1)
//    secondlargest=Math.max(...arr)
//    return (secondlargest)
// }
// console.log(largestvalue(arrnum))


const arraynum=[2,4,6,7,8,3]
const findlargestvalue=(arr)=>{
   firstlarge=Math.max(...arr)
   index=arr.indexOf(firstlarge)
   arr.splice(index,1)
   secondlarge=Math.max(...arr)
   return secondlarge
}
console.log(findlargestvalue(arraynum))