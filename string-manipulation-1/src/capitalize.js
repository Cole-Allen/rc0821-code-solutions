/* exported capitalize */
function capitalize(string) {
  var newString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    newString += string[i].toLowerCase();
  }
  return newString;
}
