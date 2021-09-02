/* exported equal */
function equal(first, second) {
  if (second.length > first.length || second.length < first.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
