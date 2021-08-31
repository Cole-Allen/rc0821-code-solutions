/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string && string[i]) {
      newString += string[i];
    }

  }
  return newString + '...';
}

/*
define new function truncate with two parameters (length, string)
  assign empty var to new var newString
  loop through the string (length) times
    check if string has content and doesnt exceed the length of the string
      concatenate the string at i to newString

  return the newString concatednated with an ellipse
*/
