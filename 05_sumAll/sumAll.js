const sumAll = function() {
	const nums = [...arguments];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 0 || typeof nums[i] !== "number") {
			return "ERROR";
		}
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
