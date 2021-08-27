/* exported take */
function take(array, count) {
  var newArray = [];
  if (array.length >= count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

/*
define the function 'take' with 2 parameters: array, and count
  create an empty array and assign it to newArray
  check if the length of the array is larger or equal to the argument count
    if it is, loop through the array, (count) times and push the value to newArray
  return newArray
*/
