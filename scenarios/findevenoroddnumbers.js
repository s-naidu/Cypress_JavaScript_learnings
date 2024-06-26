const num=[2,4,3,6,7,8]
const evennum=num.filter((item)=>{
    return item%2===0
})
const odd=num.filter((item)=>{
    return item%2==!0
})
console.log("even number" +evennum)
console.log("odd number" +odd)