/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var newTempArray = [];
  var index = 0;
  for (var i = 0; i < array.length / size; i++) {
    for (var j = 0; j < size; j++) {
      if (!(index > array.length - 1)) {
        newTempArray.push(array[index]);
        index++;
      }

    }
    newArray.push(newTempArray);
    newTempArray = [];
  }
  return newArray;
}

/*
define a new function; chunk with two parameters(array, size)
  create an empty array and assign it to newArray(this will be the array containing the sub arrays)
  create another empty array and assign it to a new variable newTempArray(this will be the sub array)
  assign 0 to a new variable to keep track of were I am looking through
  loop through the whole array in chucks of the array length divided by the chunk size
    loop through the chunk of array (size) times
      make sure that the index doesn't exceed the length of the array
        push the value of array at index to newTempArray
        incremeant index by 1

    push the tempArray to the newArray
    clear the tempArray

    return the new Array
*/
