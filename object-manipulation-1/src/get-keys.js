/* exported getKeys */
function getKeys(object) {
  var objectArray = [];
  for (var key in object) {
    objectArray.push(key);
  }
  return objectArray;
}

/*
Define the function getKeys that takes in an object
  Create an empty array and assign it to a new variable named objectArray
  loop through every key in the object
    use the push method of the objectArray object with a value of key
  return the objectArray
*/
