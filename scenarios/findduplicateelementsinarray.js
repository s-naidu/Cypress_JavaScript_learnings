const arrnumber=[1,2,4,2,4,2,3,5]
const dup=arrnumber.filter((ele,index,arr)=>arr.indexOf(ele)==index)

console.log(dup.sort())