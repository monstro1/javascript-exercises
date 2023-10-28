const palindromes = function (str) {
	let reversedStr = "";
	for (let i = 0; i < str.length; i++) {
		reversedStr += str[i];
	}
	return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
