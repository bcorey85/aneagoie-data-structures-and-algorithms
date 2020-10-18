const addTo80 = n => {
	return n + 80;
};

const memoizedAddTo80 = n => {
	let cache = {};
	return n => {
		if (n in cache) {
			return cache[n];
		} else {
			cache[n] = n + 80;
			return cache[n];
		}
	};
};

const memoized = memoizedAddTo80();

memoized(5);
memoized(5);
memoized(100);
memoized(101);
memoized(101);

let calculations = 0;
const fibonacci = n => {
	calculations++;
	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(30);
console.log(calculations); // 2692537

let calculations2 = 0;
const fibonacciMaster = () => {
	let cache = {};

	const fib = n => {
		if (n in cache) {
			return cache[n];
		} else {
			calculations2++;
			if (n < 2) {
				return n;
			} else {
				cache[n] = fib(n - 1) + fib(n - 2);
				return cache[n];
			}
		}
	};

	return fib;
};

const fasterFib = fibonacciMaster();

fasterFib(30);
console.log(calculations2); // 32
