/* exported isAnagram */
function isAnagram(firstString, secondString) {
  if (firstString.length > secondString.length || firstString.length < secondString.length) {
    var firstNoSpace = firstString.replaceAll(' ', '');
    var secondNoSpace = secondString.replaceAll(' ', '');
    if (firstNoSpace.length > secondNoSpace.length || firstNoSpace.length < secondNoSpace.length) {
      return false;
    }
  }
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
