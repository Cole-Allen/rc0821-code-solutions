/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i > string.length - length - 1) {
      newString += string[i];
    }
  }
  return newString;
}
