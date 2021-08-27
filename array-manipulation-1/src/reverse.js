/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
