

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);

  
  return graph;
};

// var Node = function(value, params) {
//   var node = {};
//   var links = Array.prototype.slice.call(arguments, 1);

//   node.value = value;
//   node.edges = links.slice(0);

//   return node;
// };

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
    this.removeEdge(this[node][0], node)
  }
  // for (var i = 0; i < this[node].length; i++) {
  //   this.removeEdge(this[node][i], node)
  // }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode) ? true : false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode)
  this[toNode].push(fromNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toArr = this[toNode];
  var fromArr = this[fromNode]

  fromArr.splice(fromArr.indexOf(toNode));
  toArr.splice(toArr.indexOf(fromNode));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this)
  _.each(this, function(item){
    console.log(Array.isArray(item))
  })
  // Graph.prototype.callBack = cb;

  // for (var key in this) {
  //   if (Array.isArray(this[key])) {
  //     console.log(typeof removeEdge);
  //   } 
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  let a = Graph()
//  a.addNode(1);
//  a.addNode(2);
// console.log(a)

//  // // console.log(a.contains(1));
// a.addEdge(1,2)
//  // a.removeNode(2)

// console.log(a)
