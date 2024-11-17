const removeFromArray = function(array, ...args) {
  for(let i = 1; i < arguments.length; i++){
    //array =  array.filter(element => element !== args[i]);
    
  }

  // Another way to do it
  array = array.filter(element => !args.includes(element));
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
