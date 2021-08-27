/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if ((i >= array.length - count)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/*
define a function takeRight with two parameters(arra, count)
  assisng an empty array to a new var newArray
  loop through the array
    check if the length of the array minus the count parameter is less than or equal to the current iteration(i)
  return newArray

*/
