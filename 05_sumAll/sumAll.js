const sumAll = function(num1, num2) {
	if (num1 < 0 || num2 < 0) {
		return "ERROR";
	}
	let sumOfNums = 0;
	const minNum = Math.min(num1, num2);
	const maxNum = Math.max(num1, num2);
	for (let i = minNum; i <= maxNum; i++) {
		sumOfNums += i;
	}
	return sumOfNums;
};

// Do not edit below this line
module.exports = sumAll;
