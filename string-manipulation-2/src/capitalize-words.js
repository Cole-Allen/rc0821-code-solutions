/* exported capitalizeWords */
function capitalizeWords(string) {
  var newArray = string.toLowerCase().split(' ');
  var newString = '';
  var newWord = '';
  var newSpaceString = '';
  for (var i = 0; i < newArray.length; i++) {
    newWord += ' ' + newArray[i][0].toUpperCase();
    for (var j = 1; j < newArray[i].length; j++) {
      newWord += newArray[i][j];
    }
    newString += newWord;
    newWord = '';
  }
  for (var l = 1; l < newString.length; l++) {
    newSpaceString += newString[l];
  }
  return newSpaceString;
}
