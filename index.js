class caesar {
    static shifter(char, shift) {
        return char.charCodeAt() + shift;
    }
    static encrypt(str, amount) {
        return String.fromCharCode(...str.split("").map((c, index) => shifter(c, amount[index % amount.length])));
    }
    static decrypt(str, amount) {
        return String.fromCharCode(...str.split("").map((c, index) => shifter(c, -amount[index % amount.length])));
    }
}




let text = "alimert";
let sifreli = caesar.encrypt(text, [1, 2]);
let sifresiz = caesar.decrypt(sifreli, [1, 2]);

console.log(sifreli, sifresiz);