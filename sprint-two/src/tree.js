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

treeMethods.removeFromParent = function(target) {
  // takes a child node
  // changes parent to null
  // removes child node from the children array of the old parent
  // return the rest of the tree
  var matched;
  
  var removeTarget = function(node) {
    if (node.children.length > 0) {
      // child.parent = null;
      _.each(node.children, function(item, i, arr) {
        if (node.children[i].value === target) {
          matched = node.children[i];
          node.children[i].parent = null;
          // console.log(node.children, i)
          node.children.splice(i, 1); 
          // console.log(matched);
          return matched;
          
        } else {
          removeTarget(node.children[i]);
        }
      });
    }
  };

  removeTarget(this);
  
  return matched;

  
};
/*
 * Complexity: What is the time complexity of the above functions?
 cb()
 */
var b = Tree(6)
b.addChild(5)
b.addChild(7)
b.children[0].addChild(4)
b.children[1].addChild(8)
var q = b.removeFromParent(7)
console.log(b, q)
