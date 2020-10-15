class QueueUsingStack {
	constructor() {
		this.first = [];
		this.last = [];
	}

	enqueue(value) {
		// Check to see if items are in first
		// If they are, move them to last in reverse order
		// Newest ends up on top (typical of stack)
		const length = this.first.length;
		for (let i = 0; i < length; i++) {
			this.last.push(this.first.pop());
		}
		this.last.push(value);
		return this;
	}

	dequeue() {
		// Check if items are in last
		// If they are, move them to first in reverse order, newest ends up on bottom
		// Pop first time (stack = top item gets removed)
		// Stack first item in gets removed
		const length = this.last.length;
		for (let i = 0; i < length; i++) {
			this.first.push(this.last.pop());
		}
		this.first.pop();
		return this;
	}

	peek() {
		// If items in last, return the first item that was placed in
		if (this.last.length > 0) {
			return this.last[0];
		}

		// Otherwise return last item in first
		return this.first[this.first.length - 1];
	}
}

const myQueue = new QueueUsingStack();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
