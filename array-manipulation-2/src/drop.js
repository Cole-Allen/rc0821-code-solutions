/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (array.length >= count) {
    for (var i = 0; i < array.length; i++) {
      if (i >= count) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

/*
define a new function called drop with two parameters(array, count)
  create a new empty array and assign it to the variable newArray
  check to make sure that the length of the array is greater than or equal to the argument count
  if it is; loop through the array
    check if the array index number is  larger than or equal to the count argument
      psuh the value of the array at index i to the var newArray
  return newArray
*/
