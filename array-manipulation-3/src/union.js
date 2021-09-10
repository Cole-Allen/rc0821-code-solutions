/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    var diff = true;
    for (var l = 0; l < first.length; l++) {
      if (second[j] === newArray[l]) {
        diff = false;
      }
    }
    if (diff) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
