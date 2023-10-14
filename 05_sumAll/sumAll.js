const sumAll = function() {
	const nums = [...arguments];
	nums.forEach((num) => {
		if (num < 0 || typeof num !== "number") {
			return "ERROR";
		}
	});
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
