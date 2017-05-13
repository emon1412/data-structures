var Tree = function(value) {
  var newTree = {};
  newTree.parent = null;
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  newNode.parent = this;
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var isFound = false;

  // mutates isFound when we find the matching value
  var findTarget = function(child) {
    if (child.value === target) {
      isFound = true;
    }

    for (var i = 0; i < child.children.length; i++) {
      findTarget(child.children[i]);
    }
  };

  findTarget(this);

  return isFound;
};
/*
 * Complexity: What is the time complexity of the above functions?
 cb()
 */
var b = Tree(6)
b.addChild(7)
b.children[0].addChild(8)

console.log(b.children[0].children[0])
