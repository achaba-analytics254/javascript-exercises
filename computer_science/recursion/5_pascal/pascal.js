const pascal = function(n) {
  if (n === 1) return [[1]];

  let prev = pascal(n - 1)
  let lastRow = prev[prev.length - 1]

  let newRow = [1]
  for (let i = 0; i < lastRow.length; i++) {
    newRow.push(lastRow[i] + lastRow[i + 1])
  }
  newRow.push(1)

  prev.push(newRow);
  return prev
};
  
// Do not edit below this line
module.exports = pascal;
