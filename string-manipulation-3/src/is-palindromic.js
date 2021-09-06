/* exported isPalindromic */
function isPalindromic(string) {
  var testString = string.replace(' ', '');
  var backwards = '';
  for (var i = testString.length; i > 0; i--) {
    backwards += testString[i - 1];
  }
  return testString === backwards;
}
