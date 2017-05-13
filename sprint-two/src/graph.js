// Instantiate a new graph
var Graph = function() {
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  while (this[node].length > 0) {
    this.removeEdge(this[node][0], node);
  }
  // for (var i = 0; i < this[node].length; i++) {
  //   this.removeEdge(this[node][i], node)
  // }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toArr = this[toNode];
  var fromArr = this[fromNode];

  fromArr.splice(fromArr.indexOf(toNode));
  toArr.splice(toArr.indexOf(fromNode));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i <= Object.keys(this).length + 1; i++) {
    if (Array.isArray(this[i])) {
      cb.call(this, i);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

