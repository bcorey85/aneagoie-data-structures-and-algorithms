class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const node = new Node(value);
		if (this.top === null) {
			this.top = node;
			this.bottom = node;
		} else {
			const holdingPointer = this.top;
			this.top = node;
			this.top.next = holdingPointer;
		}

		this.length++;
		return node;
	}

	pop() {
		if (this.length === 0) {
			return null;
		}

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;

		return this.top;
	}
}

const myStack = new Stack();
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
