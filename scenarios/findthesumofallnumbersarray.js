const num=[1,2,3,4,5,6]

const sum=(arr)=>{
return arr.reduce((pre,curr)=>{
    return pre+curr
})
}
console.log(sum(num))

var arraytotal=num.reduce((pre,curr)=>pre+curr,0)
console.log(arraytotal)