const sumAll = function() {
	for (const arg of arguments) {
		if (arg < 0 || typeof arg !== "number") {
			return "ERROR";
		}
	}
	let sumOfNums = 0;
	const minNum = Math.min(...arguments);
	const maxNum = Math.max(...arguments);
	for (let i = minNum; i <= maxNum; i++) {
		sumOfNums += i;
	}
	return sumOfNums;
};

// Do not edit below this line
module.exports = sumAll;
