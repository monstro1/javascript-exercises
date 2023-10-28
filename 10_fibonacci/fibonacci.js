const fibonacci = function(index) {
	let sequence = [0, 1];
	for (let i = 2; i < index + 1; i++) {
		sequence.push(sequence[i - 2] + sequence[i - 1]);
	}
	return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
