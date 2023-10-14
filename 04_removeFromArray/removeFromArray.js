const removeFromArray = function() {
	let arr = arguments[0];
	let args = [];
	for (let i = 1; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	let newArr = [];
	newArrBuild: for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < args.length; j++) {
			if (arr[i] === args[j]) {
				continue newArrBuild;
			}
		}
		newArr.push(arr[i]);
	}
	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
