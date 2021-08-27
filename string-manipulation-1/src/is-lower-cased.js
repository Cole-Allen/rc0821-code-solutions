/* exported isLowerCased */
// function isLowerCased(string) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === '-') {
//       continue;
//     } else if (string[i] === string[i].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }
function isLowerCased(string) {
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
}
