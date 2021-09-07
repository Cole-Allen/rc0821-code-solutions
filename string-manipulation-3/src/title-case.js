/* exported titleCase */
function titleCase(string) {
  var shortWordsString = 'and nor but or a an the as at by for in of on per to';
  var newString = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    for (var j = 0; j < splitString[i].length; j++) {
      if (splitString[i].length > 3 || !shortWordsString.includes(splitString[i])) {
        if (j === 0) {
          newString += splitString[i][j].toUpperCase();
        } else {
          newString += splitString[i][j];
        }
      } else {
        newString += splitString[i][j];
      }
    }
    if (i < splitString.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
