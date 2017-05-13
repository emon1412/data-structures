

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  }
  
  // get storage at index and store it to a var
  var bucket = this._storage.get(index);
  // push that to variable
  
  if (this.retrieve(k)) {
    _.each(bucket, function(sub, i) {
      if (sub[0] === k) { sub[1] = v; }
    });
  } else {
    bucket.push([k, v]);
  }
  // set to new variable
  this._storage.set(index, bucket);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
   
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k ) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

