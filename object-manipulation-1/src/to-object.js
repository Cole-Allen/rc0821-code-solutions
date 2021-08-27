/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}

/*
define a new function that takes in an array containing 2 strings
  create an empty object literal and assign it to a new variable named newObject
  assign the value of keyvalue pair at index 1 to -
  - a new object key with the name of the value of the keyvaluepair at index 0

  return the variable newObject

*/
