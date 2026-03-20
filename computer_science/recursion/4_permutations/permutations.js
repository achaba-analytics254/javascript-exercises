const permutations = function(arr) {
  if (arr.length === 1) return [arr];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    let permuted = permutations(remaining);

    for (let p of permuted) {
        result.push([current, ...p])
    }
  }

  return result
}
// Do not edit below this line
module.exports = permutations;
