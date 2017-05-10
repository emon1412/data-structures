var Stack = function() {
  var someInstance = {
    keysNum: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.keysNum] = value; 
    someInstance.keysNum++;
  };

  someInstance.pop = function() {
    var newestKeys = Math.max(...Object.keys(storage));
    var item = storage[newestKeys];
    
    if (Object.keys(storage).length > 0) {      
      delete storage[newestKeys];
      return item;
    }

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
