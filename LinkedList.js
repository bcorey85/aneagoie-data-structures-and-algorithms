class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(15);
console.log(myLinkedList.printList());
myLinkedList.insert(-50, 1);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
