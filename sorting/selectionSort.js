// Space complexity: O(1), no extra data structure
// Time Complexity - O(n^2) / quadratic, since all items have to be compared to each other

const selectionSort = array => {
	const length = array.length;

	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;

		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}

		let temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	console.log(array);
};
let array = [ 5, 3, 2, 1, 6, 8 ];
console.log(selectionSort(array));
