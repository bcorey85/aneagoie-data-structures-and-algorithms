class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}

	addVertex(node) {
		if (this.adjacentList[node]) {
			return;
		}

		this.adjacentList[node] = [];
		this.numberOfNodes++;
	}

	addEdge(node1, node2) {
		if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
			return;
		}

		if (!this.adjacentList[node1].includes(node2)) {
			this.adjacentList[node1].push(node2);
		}

		if (!this.adjacentList[node2].includes(node1)) {
			this.adjacentList[node2].push(node1);
		}
	}
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');

myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

console.log(myGraph);
