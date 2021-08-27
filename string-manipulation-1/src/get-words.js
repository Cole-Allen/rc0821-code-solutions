/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string !== '') {
    newArray = string.split(' ');
  }

  return newArray;

}

/*
 Define new function that takes in a string.
  check if string has anything in it
  Assign the return value of split method of the "string" object to a new variable named 'newArray'.
  return the value of newArray

*/
