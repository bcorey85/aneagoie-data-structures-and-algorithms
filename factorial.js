const findFactorialRecursive = number => {
	debugger;
	if (number === 2) {
		return 2;
	}

	return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = number => {
	let answer = 1;
	for (let i = 1; i <= number; i++) {
		answer *= i;
	}

	return answer;
};
