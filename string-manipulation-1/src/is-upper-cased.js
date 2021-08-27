/* exported isUpperCased */
// function isUpperCased(string) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toLowerCase()) {
//       return false;
//     }
//   }
//   return true;
// }
function isUpperCased(string) {
  if (string.toUpperCase() === string) {
    return true;
  }
  return false;
}
