var extend = function(ob1, ob2) {
  for (var key in ob2) {
    ob1[key] = ob2[key];
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  someInstance.storage = {};
  someInstance.keysNum = 0;
  
  extend(someInstance, QueueMethods);
  return someInstance;
};

var QueueMethods = {
  enqueue: function(value) {
    this.storage[this.keysNum] = value; 
    this.keysNum++;
  },
  dequeue: function() {
    var oldestKeys = Math.min(...Object.keys(this.storage));
    var item = this.storage[oldestKeys];
    
    if (Object.keys(this.storage).length > 0) {
      delete this.storage[oldestKeys];
      return item;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



