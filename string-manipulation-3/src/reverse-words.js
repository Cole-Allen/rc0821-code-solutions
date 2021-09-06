/* exported reverseWords */
function reverseWords(string) {
  var newString = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    for (var j = splitString[i].length - 1; j > -1; j--) {
      newString += splitString[i][j];
    }
    if (i !== splitString.length - 1) {
      newString += ' ';
    }

  }
  return newString;
}
