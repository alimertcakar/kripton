module.exports = class caesar {
    static shifter(char, shift) {
        return char.charCodeAt() + shift;
    }
    static encrypt(str, amount = [1, 9, 2, 3]) { //default password is 1923
        return String.fromCharCode(...str.split("").map((c, index) => this.shifter(c, amount[index % amount.length])));
    }
    static decrypt(str, amount = [1, 9, 2, 3]) { //default password is 1923
        return String.fromCharCode(...str.split("").map((c, index) => this.shifter(c, -amount[index % amount.length])));
    }
}
