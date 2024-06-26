const arrnum=[
{name: "Sudarshan", age:30},
{name: "Sudarshan1", age:42},
{name: "Sudarshan2", age:52},
{name: "Sudarshan3", age:32},
{name: "Sudarshan4", age:32},
]

const finditem=arrnum.filter((item)=>{
    return item.age>30
})
console.log(finditem)