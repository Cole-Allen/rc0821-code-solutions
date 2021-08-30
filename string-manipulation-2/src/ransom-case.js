/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) !== 1) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
