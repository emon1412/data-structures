var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keysNum = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.keysNum] = value;
  this.keysNum++;
};

Stack.prototype.pop = function() {
  if (Object.keys(this.storage).length > 0) { 
    var newestKey = Math.max(...Object.keys(this.storage));
    var item = this.storage[newestKey];
    delete this.storage[newestKey];
    return item;
  }
};

Stack.prototype.size = function() {  
  return Object.keys(this.storage).length;
};
