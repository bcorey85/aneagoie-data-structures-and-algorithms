const string = "Hi, I'm Brandon";

const reverse = str => {
	const split = str.split('');

	let reversedArray = [];
	for (let i = 0; i < split.length; i++) {
		reversedArray.push(split[split.length - i - 1]);
	}

	return reversedArray.join('');
};
