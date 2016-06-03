var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // this generates the index for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) ;

  if(!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  };

  var alreadyExists = false;

  for(var pos = 0;  pos < bucket.length;  pos++){
    var positionInBucket = bucket[pos];

    if( k === positionInBucket[0]){
      positionInBucket[1] = v;
      alreadyExists = true;
    }
  }

  if(!alreadyExists){
    bucket.push([k,v]);
  }




};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)

  var doesExist = false;
  if(!bucket){
    return null;
  }
  for(var pos = 0; pos < bucket.length; pos++){
    var positionInBucket = bucket[pos]
    if( k === positionInBucket[0]){
      doesExist = true;
      return positionInBucket[1];


    }
  }
  if(!doesExist){
    return null;
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)

  if(!bucket){
    return null;
  }
   for(var pos = 0; pos < bucket.length; pos++){
    var positionInBucket = bucket[pos]
    if( k === positionInBucket[0]){
      console.log("This is inside the IF",positionInBucket)
      // bucket.splice(pos, 1);
            console.log(bucket);

      bucket.splice(pos, 1);

      console.log(bucket);



    }

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
