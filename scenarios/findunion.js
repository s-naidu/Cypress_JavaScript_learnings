const arr1=[2,3,4,5,6,8,9,7,4,4]
const arr2=[3,2,6,5,4]

const union=[...arr1,...arr2]
console.log([...new Set(union.sort())])