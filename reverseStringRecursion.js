const reverseString = string => {
	if (string.length === 1) {
		return string;
	}

	const lastLetter = string.slice(string.length - 1);
	const rest = string.slice(0, string.length - 1);

	return lastLetter + reverseString(rest);
};

console.log(reverseString('zombies and stuff are trying to kill us'));
