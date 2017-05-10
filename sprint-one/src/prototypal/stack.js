var Stack = function() {
  // Hey! Rewrite in the new stylepr. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.keysNum = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.keysNum] = value;
  this.keysNum++;
};
stackMethods.pop = function() {
  if (Object.keys(this.storage).length) {
    var newestKeys = Math.max(...Object.keys(this.storage));
    var item = this.storage[newestKeys];
    delete this.storage[newestKeys];
    return item;
  }

};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

