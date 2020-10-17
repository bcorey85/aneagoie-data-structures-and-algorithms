class ArrayStack {
	constructor() {
		this.stack = [];
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	push(value) {
		this.stack.push(value);
		return this;
	}

	pop() {
		this.stack.pop();
		return this;
	}
}

const myStack = new ArrayStack();
myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');
myStack.push('5');
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
