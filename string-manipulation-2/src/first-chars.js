/* exported firstChars */
function firstChars(length, string) {
  var newString = '';

  for (var i = 0; i < length; i++) {
    if (i <= string.length - 1) {
      newString += string[i];
    }

  }

  return newString;

}
