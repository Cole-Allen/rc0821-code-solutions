/* exported omit */
function omit(source, keys) {
  var newObj = {};
  var test = false;
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        test = false;
        break;
      }
      test = true;
    }
    if (test) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
