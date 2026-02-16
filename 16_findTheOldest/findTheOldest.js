const findTheOldest = function(arr) {
    if (!arr.length) return null;

    return arr.reduce((current, oldest) => {
        const currentAge = current.yearOfDeath - current.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        return  currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
