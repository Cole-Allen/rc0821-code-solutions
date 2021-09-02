/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
