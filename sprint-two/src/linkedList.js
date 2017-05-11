var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
    }
    
    if (list.tail) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    var anything = list.head.value;
    list.head = list.head.next;
    return anything;
  };

  list.contains = function(target) {
    var current = list.head;
    
    while (current != null) {

      if (current.value === target) {
        return true;
      }

      current = current.next;
  
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 addTail and removeTail are constant.
 contains is linear.
 */
