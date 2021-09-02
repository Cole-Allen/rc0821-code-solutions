/* exported defaults */
function defaults(target, source) {
  var obj = {};
  for (var tKey in target) {
    obj[tKey] = target[tKey];
  }
  for (var sKey in source) {
    target[sKey] = source[sKey];
  }
  for (var oKey in obj) {
    target[oKey] = obj[oKey];
  }
}
