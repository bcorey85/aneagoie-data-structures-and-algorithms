class Node {
	constructor(value, config) {
		this.value = value;
		this.next = null;

		if (config && config.double) {
			this.previous = null;
		}
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const node = new Node(value);

		this.tail.next = node;
		this.tail = node;
		this.length++;
	}

	prepend(value) {
		const node = new Node(value);

		node.next = this.head;
		this.head = node;
		this.length++;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	insert(index, value) {
		if (index <= 0) {
			return this.prepend(value);
		}

		if (index >= this.length) {
			return this.append(value);
		}

		const leader = this.traverseToNode(index - 1);
		const holdingPointer = leader.next;

		const node = new Node(value);
		leader.next = node;
		node.next = holdingPointer;
	}

	traverseToNode(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		this.tail = this.head;

		let first = this.head;
		let second = first.next;
		while (second) {
			const third = second.next;
			second.next = first;
			first = second;
			second = third;
		}

		this.head.next = null;
		this.head = first;
	}

	remove(index) {
		if (index <= 0) {
			this.head = this.head.next;
			this.length--;
			return;
		}

		if (index >= this.length) {
			const leader = this.traverseToNode(this.length - 1 - 1);
			this.tail = leader;
			this.tail.next = null;
			this.length--;
			return;
		}

		const leader = this.traverseToNode(index - 1);
		const deletedNode = leader.next;
		leader.next = deletedNode.next;
		this.length--;
	}
}

class DoubleLinkedList {
	constructor(value) {
		this.head = new Node(value, { double: true });
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const node = new Node(value, { double: true });

		this.tail.next = node;
		node.previous = this.tail;

		this.tail = node;
		this.length++;
	}

	prepend(value) {
		const node = new Node(value, { double: true });

		node.next = this.head;
		this.head.previous = node;
		this.head = node;
		this.length++;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	insert(index, value) {
		if (index <= 0) {
			return this.prepend(value);
		}

		if (index >= this.length) {
			return this.append(value);
		}

		const leader = this.traverseToNode(index - 1);
		const follower = leader.next;

		const node = new Node(value, { double: true });
		leader.next = node;
		node.previous = leader;
		node.next = follower;
		follower.previous = node;
	}

	remove(index) {
		if (index <= 0) {
			this.head = this.head.next;
			this.head.previous = null;
			this.length--;
			return;
		}

		if (index >= this.length) {
			const leader = this.traverseToNode(this.length - 1 - 1);
			this.tail = leader;
			this.tail.next = null;
			this.length--;
			return;
		}

		const leader = this.traverseToNode(index - 1);
		const follower = this.traverseToNode(index + 1);
		follower.previous = leader;
		leader.next = follower;
		this.length--;
	}

	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		this.tail = this.head;
		this.tail.previous = this.tail.next;
		let first = this.head;
		let second = first.next;
		[ 5, 10, 15, 1 ];

		while (second) {
			const third = second.next;
			second.next = first;
			second.previous = third;
			first = second;
			second = third;
		}

		this.head.next = null;
		this.head = first;
	}

	traverseToNode(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(15);
myLinkedList.insert(-50, 1);
myLinkedList.remove(2);
myLinkedList.reverse();

const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.prepend(15);
myDoubleLinkedList.insert(-50, 1);
myDoubleLinkedList.reverse();
