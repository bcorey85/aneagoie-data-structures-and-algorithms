const array1 = [];
const array2 = [ 4 ];

// check each value in array 2 to against pairs of values in array1
// if between pair, insert
// if not, next
const merge = (arr1, arr2) => {
	let merged = [];
	let i = 0;
	let j = 0;

	while (arr1[i] || arr2[j]) {
		if (!arr2[j] || arr1[i] < arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	return merged;
};
