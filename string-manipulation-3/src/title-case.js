/* exported titleCase */
function titleCase(string) {
  var shortWordsString = 'and nor but or a an the as at by for in of on per to';
  var newString = '';
  var splitString = string.split(' ');
  var previousIndex = 0;
  var capitalizeNext = false;
  for (var i = 0; i < splitString.length; i++) {

    var x = 0;
    if (i !== 0) {
      x = 1;
    }
    if (splitString[i].toUpperCase() === 'API') {
      newString += 'API';
      continue;
    }
    if (splitString[i].toUpperCase().startsWith('JAVASCRIPT')) {
      if (splitString[i].toUpperCase().endsWith(':')) {
        newString += 'JavaScript: ';
        capitalizeNext = true;
      } else {
        newString += 'JavaScript ';
      }

      continue;
    }
    for (var j = 0; j < splitString[i].length; j++) {

      if (!shortWordsString.includes(splitString[i])) {
        if (j === 0 || splitString[i][previousIndex] === '-') {
          newString += splitString[i][j].toUpperCase();
        } else {
          newString += splitString[i][j];
        }
      } else if ((i === 0 && j === 0) || splitString[i - x][previousIndex] === ':' || capitalizeNext) {
        newString += splitString[i][j].toUpperCase();
        capitalizeNext = false;
      } else {
        newString += splitString[i][j];
      }
      previousIndex = j;
    }
    if (i < splitString.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
