const arr1=[2,3,4,5,6]
const arr2=[3,2,6,5,4]

const arrayissame=arr1.length==arr2.length &&
arr1.every((curEle)=>{
    if(arr2.indexOf(curEle)>-1){
        return (curEle=[arr2.indexOf(curEle)])
    }
})
console.log(arrayissame)