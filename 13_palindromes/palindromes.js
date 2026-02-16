const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clearedString = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char)).join('');

    const reversedString = clearedString.split('').reverse().join('');

    return clearedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
