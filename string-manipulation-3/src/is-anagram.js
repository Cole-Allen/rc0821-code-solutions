/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var indexes = [];
  for (var i = 0; i < firstString.length; i++) {
    var match = false;
    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j] && !indexes.includes(j)) {
        indexes.push(j);
        match = true;
        break;
      }
    }
    if (!match) {
      return false;
    }
  }
  return true;
}

/* dang im close */
