/* exported invert */
function invert(source) {
  var temp = 0;
  var newObj = {};

  for (var key in source) {
    temp = key;
    newObj[source[key]] = temp;
  }
  return newObj;
}
