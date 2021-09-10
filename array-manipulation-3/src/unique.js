/* exported unique */
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {

    var unique = true;

    for (var j = 0; j < newArray.length; j++) {

      if (array[i] === newArray[j]) {
        unique = false;
      }
    }

    if (unique) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
