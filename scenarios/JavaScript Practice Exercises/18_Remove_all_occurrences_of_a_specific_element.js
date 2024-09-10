function removeElement(array,target){
return array.filter(item=>item!==target)
}
let array=[10,12,10,11,10,13]
let target=10
let removed=removeElement(array,target)
console.log(removed)