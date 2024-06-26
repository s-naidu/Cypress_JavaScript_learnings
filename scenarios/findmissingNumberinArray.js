const arrnum=[1,2,5,6,10]
const missarray=[]
const  missingvalue=(arr)=>{
const minvalue=Math.min(...arr)
const maxvalue=Math.max(...arr)

for(let i=minvalue;i<maxvalue;i++){
    if(arr.indexOf(i)<0){
        missarray.push(i)
    }
}
return (missarray)
}
console.log(missingvalue(arrnum))