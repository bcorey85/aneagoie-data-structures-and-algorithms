// Space Complexity - O(1), not creating any other data structures
// Time Complexity - O(n^2) / quadratic, since all items have to be compared to each other

const bubbleSort = array => {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
};

console.log(bubbleSort([ 5, 3, 10, 2 ]));
