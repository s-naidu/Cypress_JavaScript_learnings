//method 1

var str = "Hello this is sudarshan"
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString(str))
//method 2

var string = "Thsi is sudarshan Naidu Dondeti"

var result = string.split(' ').map(function (word) {
    return word.split('').reverse().join('')
})
console.log(result.join(' '))

//method 3
function reversestring(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reversestring("Thsi is sudarshan Naidu"))


///method 4 

const name1 = "this is sudarshan"
var rev = ""
var words = name1.split(" ");
for (let i = 0; i < words.length; i++) {
    var word = words[i];
    var revword = " ";

    for (let j = word.length - 1; j >= 0; j--) {
        revword = revword + word.charAt(j);
    }
    rev = rev + revword + " ";
}

console.log(rev)