/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (count <= array.length) {
    for (var i = 0; i < array.length; i++) {
      if (i < array.length - count) { newArray.push(array[i]); }
    }
  }
  return newArray;

}

/*
define a new function dropRight with two parameters(array, count)
  check if the length of the array parameter is larger than or equqal to the count parameter
  loop through the array
    check if the current iteration(i) is less than the array length minus the count parameter
      push the value of array[i] into newArray
  return newArray
*/
