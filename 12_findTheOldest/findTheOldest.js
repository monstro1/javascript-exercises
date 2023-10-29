const findTheOldest = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
	}
};

// Do not edit below this line
module.exports = findTheOldest;
