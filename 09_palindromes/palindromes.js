const palindromes = function (str) {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
