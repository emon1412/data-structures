var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keysNum = 0;
  
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.keysNum] = value;
  this.keysNum++;
};

Queue.prototype.dequeue = function() {
  if (Object.keys(this.storage).length > 0) { 
    var oldestKey = Math.min(...Object.keys(this.storage));
    var item = this.storage[oldestKey];
    delete this.storage[oldestKey];
    return item;
  }
};

Queue.prototype.size = function() {  
  return Object.keys(this.storage).length;
};
