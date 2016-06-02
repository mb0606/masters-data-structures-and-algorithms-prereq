var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {}
  stack.storage = {};
  stack.length = 0;
  _.extend(stack,stackMethods);

  return stack;
};

var stackMethods = {

  push : function(value){
    this.length++;
    this.storage[this.length -1] = value;

  },

  pop : function(){
    var result = this.storage[this.length - 1];
    if(this.size()){
      delete this.storage[this.length -1];
      this.length--;
    }
    return result;
  },

  size : function(){
    return this.length;
  }
};
// function each(collection, iterator) {
//     var arrayLength = collection.length;

//     if (Array.isArray(collection)){
//       for (var i = 0; i < arrayLength; i++){
//         iterator(collection[i], i, collection);
//       }
//     } else {
//       for (var key in collection){
//         if (collection.hasOwnProperty(key)) {
//           iterator(collection[key], key, collection);
//         }
//       }

//     }


//   };

// function extend(obj) {
//     var args = Array.prototype.slice.call(arguments);
//     var newObj = obj;
//     var key;

//     each(args, function(item) {
//       for(key in item) {
//         newObj[key] = item[key];
//       }
//     });

//     return newObj;
//   };


