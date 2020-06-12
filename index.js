function shifter(char, shift) {
    return char.charCodeAt() + shift;
}
var caesarShift = function (str, amount) {
    return String.fromCharCode(...str.split("").map(c => shifter(c, amount)));
};


