const findTheOldest = function(arr) {
	const currentYear = new Date().getFullYear();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].yearOfDeath) {
			arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
		} else {
			arr[i].age = currentYear - arr[i].yearOfBirth;
		}
	}
	arr.sort((a, b) => b.age - a.age);
	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
