// Space complexity - O(1)
// Time complexity - O(n^2) quadratic, possibly O(n)

const insertionSort = array => {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			// move numbers to first position
			array.unshift(array.splice(i, 1)[0]);
		} else {
			// find where number should go
			for (let j = 1; j < i; j++) {
				// if current number is between
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					//move number between
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}

	return array;
};

const array = [ 5, 3, 1, 6, 8, 4 ];
console.log(insertionSort(array));
