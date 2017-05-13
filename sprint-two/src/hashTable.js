

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
  console.log('numberfilled is', this.numberFilled);
  
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
  
  this.numberFilled--;
};

HashTable.prototype.resize = function() {
  
};
var c = new HashTable()
var b = new HashTable();
b.insert('Minh', 'SC')
b.insert('Jeremy', 'DOTA2')
b._storage.each(function(item, i) {
  if (Array.isArray(item)) {
    _.each(item, function(keyVal) {
      c.insert(keyVal[0], keyVal[1])
    })
    // console.log('found array', item);
  }
});

var newB = LimitedArray(8);

newB.set(7, 'wer');
newB.set(3, 'sdf');
newB.set(2, 'hello');
newB.set(3, 'sdsdfs');
// newB.each(function(bucket) {
//   console.log(['key', bucket]);
// });

console.log(b.numberFilled)

/*
 * Complexity: What is the time complexity of the above functions?
 */

