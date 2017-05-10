var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.keysNum = 0;
  
  return obj
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.keysNum] = value
  this.keysNum++
}

queueMethods.dequeue = function() {
  if(Object.keys(this.storage).length > 0){
    var oldestKey = Math.min(...Object.keys(this.storage))
    var item = this.storage[oldestKey]
    delete this.storage[oldestKey]
    return item
  }
}

queueMethods.size = function() {  
  return Object.keys(this.storage).length;
}

