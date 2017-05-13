var BinarySearchTree = function(value) {
  var obj = Node(value);
  // var obj = Objectcreate(BST)
    
  return obj;
};
var BSTMethods = {};

BSTMethods.insert = function(value, node) {
  var newNode = Node(value);
  
  node = node || this;
  
  if (value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      node.insert(value, node.left);
    }
  } else if (value > node.value) {
    if (node.right === null) {
      node.right = newNode;
    } else {
      node.insert(value, node.right);
    }
  }
  
};
BSTMethods.contains = function(value, node) {
  node = node || this;
  
  if (value === node.value) {
    return true;
  } else if (value < node.value) {
    if (node.left !== null) {
      return node.contains(value, node.left);
    }
  } else if (value > node.value) {
    if (node.right !== null) {
      return node.contains(value, node.right);
    }
  }
  
  return false;
  
};
BSTMethods.depthFirstLog = function(cb) {  

  // cb(this.value);
  
  // if (this.left !== null) {
  //   cb(this.left);
  // }
  // if (this.right !== null) {
  //   cb(this.right);
  // }

  
  var func = function(node) {
    
    cb(node.value);
    
    if (node.left !== null) {
      func(node.left);
    }
    if (node.right !== null) {
      func(node.right);
    }
    
  };
  
  func(this);
  
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
var Node = function(value) {
  var node = Object.create(BSTMethods);
  
  node.value = value;
  
  node.left = null;
  node.right = null;

  return node;
};


// var a = BinarySearchTree(5);
// a.insert(2);
// a.insert(1)
// console.log(a, 'asdf')

// console.log(a);