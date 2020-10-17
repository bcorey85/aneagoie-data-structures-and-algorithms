const array1 = [ 2, 5, 1, 2, 3, 5, 1, 2, 4 ];
const array2 = [ 2, 5, 1, 1, 3, 5, 1, 2, 4 ];
const array3 = [ 2, 3, 4, 5 ];

const getFirstRecurringChar = arr => {
	if (arr.length === 0) {
		return undefined;
	}

	// construct hash table
	const table = {};

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		// store values in table to keep record of whats been seen
		if (table[item]) {
			return item;
		}

		table[item] = true;
	}

	return undefined;
};

const t1 = getFirstRecurringChar(array1);
const t2 = getFirstRecurringChar(array2);
const t3 = getFirstRecurringChar(array3);
console.log(t1, t2, t3);
