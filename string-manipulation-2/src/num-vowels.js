/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i].toLowerCase() === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
}
