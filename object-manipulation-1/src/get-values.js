/* exported getValues */
function getValues(object) {
  var objectArray = [];
  for (var keys in object) {
    objectArray.push(object[keys]);
  }
  return objectArray;
}
