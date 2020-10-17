// Space complexity - O(n) have to track each piece of information in memory
// Time complexity - O(n log n) - linearithmic time

const merge = (left, right) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// make sure items are in array
	while (leftIndex < left.length && rightIndex < right.length) {
		// if left is less than right number, add to result, increment index
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			// add right, increment index
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = array => {
	if (array.length === 1) {
		return array;
	}

	// Split array into right and left
	const length = array.length;
	const middle = Math.floor(length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};

const array = [ 5, 3, 1, 6, 8, 9 ];

console.log(mergeSort(array));
