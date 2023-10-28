const palindromes = function (str) {
	const punctuation = [",", ".", "?", "!", ":", ";"];
	let newStr = "";
	loop1: for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < punctuation.length; j++) {
			if (str[i] == punctuation[j]) {
				continue loop1;
			}
		}
		newStr += str[i].toLowerCase();
	}
	let reversedStr = "";
	for (let i = newStr.length - 1; i >= 0; i--) {
		reversedStr += newStr[i];
	}
	return newStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
