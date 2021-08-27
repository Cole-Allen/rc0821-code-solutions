/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i > -1; i--) {
    newWord += word[i];
  }

  return newWord;
}
