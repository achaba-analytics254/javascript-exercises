const sumAll = function(a, b) {
    let sum = 0;

    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);

    for (let i = minNum; i <= maxNum; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
