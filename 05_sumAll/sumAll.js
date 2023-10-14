const sumAll = function(num1, num2) {
	const nums = [...arguments];
	if (num1 < 0 || num2 < 0) {
		return "ERROR";
	}
	let sumOfNums = 0;
	const minNum = Math.min(...nums);
	const maxNum = Math.max(...nums);
	for (let i = minNum; i <= maxNum; i++) {
		sumOfNums += i;
	}
	return sumOfNums;
};

// Do not edit below this line
module.exports = sumAll;
