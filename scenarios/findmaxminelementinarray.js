const arrnum=[1,4,16,8,9]
const maxFunction=(arr)=>{
    return arr.reduce(function(cur,pre){
        return pre>cur?pre:cur
    })
}
console.log(maxFunction(arrnum))