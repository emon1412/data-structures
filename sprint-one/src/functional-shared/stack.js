var extend = function(ob1, ob2) {
  for (var key in ob2) {
    ob1[key] = ob2[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  someInstance.storage = {};
  someInstance.keysNum = 0;
  
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    console.log()
    this.storage[this.keysNum] = value; 
    this.keysNum++;
  },
  pop: function() {
    var newestKeys = Math.max(...Object.keys(this.storage));
    var item = this.storage[newestKeys];
    
    if (Object.keys(this.storage).length > 0) {
      delete this.storage[newestKeys];
      return item;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



