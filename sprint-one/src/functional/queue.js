var Queue = function(){

  var someInstance = {};



  // Use an object with numeric keys to store values

  var storage = {};

  var head = 0;

  var tail = 0;

  // Implement the methods below



  someInstance.enqueue = function(value){

    storage[head] = value;

    head++;

  };



  someInstance.dequeue = function(){

    if(tail<head){

      var result = storage[tail];

      delete storage[tail];

      tail++

      return result;

    }

  };



  someInstance.size = function(){

    return Math.max(head - tail, 0);

  };



  return someInstance;



}
