const sumAll = function() {
	let sumOfNums = 0;
	let minNum = Math.min(arguments);
	let maxNum = Math.max(arguments);
	for (let i = minNum; i <= maxNum; i++) {
		sumOfNums += i;
	}
	return sumOfNums;
};

// Do not edit below this line
module.exports = sumAll;
