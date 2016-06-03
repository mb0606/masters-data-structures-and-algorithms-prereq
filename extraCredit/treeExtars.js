var Tree = function(value){
  var newTree = {};

  newTree.parent = null;
  newTree.value = value;
  newTree.children = [];  // fix me

  _.extend(newTree,treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = Tree(value)
  newNode.parent = this;
  this.children.push(newNode);

};

treeMethods.contains = function(target){
  var result = false;

  var traverse = function(node){
    if(node.value === target){
      result = true;
    }

    for(var i = 0; i < node.children.length; i++){
      traverse(node.children[i]);
    }
  };


  traverse(this);
  return result;
};
treeMethods.removeFromParent = function(value){
    var nodeToRemove;

    var traverse = function(node){
       if(node.value === value){
         nodeToRemove = node;
       }
       for(var i = 0; i < node.children.length; i++){

       }



    };
    traverse(this);

}







/*
 * Complexity: What is the time complexity of the above functions?
 */
