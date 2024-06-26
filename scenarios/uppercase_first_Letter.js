function toTitleUpeerCase(str){
    return str.replace(/\b\w/g,l=>l.toUpperCase())
   // return str.replace(/\b\w/g, l => l.toUpperCase()); 
}
console.log(toTitleUpeerCase('sudarshan naidu dondeti'))