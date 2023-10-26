const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((computedSum, currentNum) => computedSum + currentNum, 0);
};

const multiply = function(arr) {
	return arr.reduce((product, currentNum) => product * currentNum, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let computedFactorial = 1;
	for (let i = 1; i <= num; i++) {
		computedFactorial *= i;
	}
	return computedFactorial;
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
