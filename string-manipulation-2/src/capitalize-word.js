/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (word.toLowerCase() === 'javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
