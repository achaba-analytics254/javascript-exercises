const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return b - a;
};

const sum = function(arr) {
	return arr.reduce((prev, next) => prev + next, 1);
};

const multiply = function(arr) {
  return arr.reduce((firstArray, nextArray) => firstArray * nextArray);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function() {
	let num = 1
  for (let i = n; i > 0; i--){
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
