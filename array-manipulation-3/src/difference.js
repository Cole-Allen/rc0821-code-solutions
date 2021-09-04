/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    var diff = true;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        diff = false;
      }
    }
    if (diff) {
      newArray.push(first[i]);
    }
  }

  for (var l = 0; l < second.length; l++) {
    var diff2 = true;
    for (var k = 0; k < first.length; k++) {
      if (second[l] === first[k]) {
        diff2 = false;
      }
    }
    if (diff2) {
      newArray.push(second[l]);
    }
  }
  return newArray;
}
