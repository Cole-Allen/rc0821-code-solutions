/* exported zip */
function zip(first, second) {
  var newArray = [];
  var shorter = first.length;
  if (shorter > second.length) {
    shorter = second.length;
  }
  for (var i = 0; i < shorter; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    newArray.push(subArray);
  }
  return newArray;
}
