/* exported filterOutNulls */
function filterOutNulls(values) {
  var newValues = [];
  for (var i in values) {
    if (values[i]) {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
