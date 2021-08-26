/* exported includesSeven */
function includesSeven(array) {
  for (var i in array) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
