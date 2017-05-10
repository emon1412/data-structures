var Queue = function() {
  var someInstance = { 
    keysNum: 0
  };
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.keysNum] = value; 
    someInstance.keysNum++;
  };

  someInstance.dequeue = function() {
    var oldestKeys = Math.min(...Object.keys(storage));
    var item = storage[oldestKeys];

    if (Object.keys(storage).length > 0) {      
      delete storage[oldestKeys];
      return item;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

