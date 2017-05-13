

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  //this.filled = 0 - 8
  this.numberFilled = 0;
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
  this.numberFilled++;
  
  if (this.numberFilled / this._limit >= 0.75) {
    this.doubleSize();
  }
  
  
  

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  
  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
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
  
  this.numberFilled--;
  
  if (this.numberFilled / this._limit < 0.25) {
    this.halfSize();
  }


};

HashTable.prototype.doubleSize = function() {
  this._limit = this._limit * 2;
  // assigns a variable "newStorage" to a LimitedArray(this._limit * 2)
  var newHashTable = new HashTable(this._limit);
  // put contents of this._storage into the variable newStorage
  this._storage.each(function(item, i) {
    if (Array.isArray(item)) {
      _.each(item, function(keyVal) {
        newHashTable.insert(keyVal[0], keyVal[1]);
      });
    }
  });
   
  // reassign this._storage to equal newStorage
  // this._storage = newStorage  
  
  this._storage = newHashTable._storage;
  
};

HashTable.prototype.halfSize = function() {
  this._limit = this._limit / 2;
  // assigns a variable "newStorage" to a LimitedArray(this._limit * 2)
  var newHashTable = new HashTable(this._limit);
  // put contents of this._storage into the variable newStorage
  this._storage.each(function(item, i) {
    if (Array.isArray(item)) {
      _.each(item, function(keyVal) {
        newHashTable.insert(keyVal[0], keyVal[1]);
      });
    }
  });
   
  // reassign this._storage to equal newStorage
  // this._storage = newStorage  
  
  this._storage = newHashTable._storage;
};
  

/*
 * Complexity: What is the time complexity of the above functions?
 */

