const swap = (array, firstIndex, secondIndex) => {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

const partition = (array, pivot, left, right) => {
	let pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
};

const quickSort = (array, left, right) => {
	let pivot;
	let partitionIndex;

	// if array still has length, ie: 0 index < 4 length
	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);

		//sort left and right
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}

	return array;
};

const array = [ 58, 3, 1, 6, 20, 3, 1, 54 ];

console.log(quickSort(array, 0, array.length - 1));
