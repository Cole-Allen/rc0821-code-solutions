/* exported titleCase */
function titleCase(string) {
  var shortWordsString = 'and nor but or a an the as at by for in of on per to';
  var newString = '';
  var splitString = string.split(' ');
  console.log(splitString);
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].toUpperCase() === 'API') {
      newString += 'API';
      continue;
    }
    if (splitString[i].toUpperCase() === 'JAVASCRIPT') {
      newString += 'JavaScript';
      continue;
    }
    for (var j = 0; j < splitString[i].length; j++) {
      if (!shortWordsString.includes(splitString[i])) {
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
