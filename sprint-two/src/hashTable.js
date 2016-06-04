var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.length = 0;
};

HashTable.prototype.insert = function(k, v){
  // this generates the index for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) ;

  if(!bucket){
    bucket = [];
    this._storage.set(i, bucket);
    this._storage.length++;
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

  this.checkStorageUsage();
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


      bucket.splice(pos, 1);
      this._storage.length++;




    }

  }
  this.checkStorageUsage();

};

HashTable.prototype.checkStorageUsage = function(){

  if(this._storage.length >= this.limit * .75){
    this.limit *= 2;
  }
  if(this._storage.length <= this.limit * .25){
    this.limit /= 2;
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
