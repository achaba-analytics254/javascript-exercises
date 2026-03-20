const totalIntegers = function(arr) {
  let count = 0;

  for (let items of arr) {
    if (Number.isInteger(items)) {
        count++;
    } else if (Array.isArray(items)) {
        count += totalIntegers(items)
    }
  }

  return count
};
  
// Do not edit below this line
module.exports = totalIntegers;
