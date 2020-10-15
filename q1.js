const { performance } = require('perf_hooks');

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain common items
// Ex
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// returns false
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// returns true

// 2 params - arrays
// should return true or false

const array1 = new Array(1000000).fill('m').concat([ 'a', 'b', 'c', 'x' ]);
const array2 = new Array(1000000).fill('m').concat([ 'z', 'y', 'i' ]);

const array3 = new Array(1000000).fill('m').concat([ 'a', 'b', 'c', 'x' ]);
const array4 = new Array(1000000).fill('m').concat([ 'z', 'y', 'x' ]);

// Slower: O(a * b)
const duplicateCheck = (arr1, arr2) => {
	const t1 = performance.now();
	let foundDuplicate = false;

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				foundDuplicate = true;
			}
		}
	}

	let t2 = performance.now();
	console.log(t2 - t1 + ' ms');
	return foundDuplicate;
};

// const res1 = duplicateCheck(array1, array2);
const res2 = duplicateCheck(array3, array4);

// Better solution: O(a + b)
const duplicateCheckHashMap = (arr1, arr2) => {
	const t1 = performance.now();
	let map = {};

	let foundDuplicate = false;
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		const item = arr2[j];
		if (map[item]) {
			foundDuplicate = true;
		}
	}

	let t2 = performance.now();
	console.log(t2 - t1 + ' ms');
	return foundDuplicate;
};

// const res3 = duplicateCheckHashMap(array1, array2);
const res4 = duplicateCheckHashMap(array3, array4);
