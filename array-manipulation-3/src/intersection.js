/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
