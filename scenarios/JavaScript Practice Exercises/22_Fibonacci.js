function fionacci(n){
if(n<=1){
    return n
}else{
    return fionacci(n-1)+fionacci(n-2)
}
}
console.log(fionacci(7))