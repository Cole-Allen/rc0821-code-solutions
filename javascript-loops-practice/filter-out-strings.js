/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValues = [];
  for (var i in values) {
    if (typeof values[i] === typeof 1) {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
