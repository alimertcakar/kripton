function shifter(char, shift) {
    return char.charCodeAt() + shift;
}
var caesarShift = function (str, amount) {
    return String.fromCharCode(...str.split("").map((c, index) => shifter(c, amount[index % amount.length])));
};


let text = "alimert";
let sifreli = caesarShift(text, [1, 4, 5, 3])
let sifresiz = caesarShift(sifreli, [-1, -4, -5, -3])

console.log(sifreli, sifresiz);