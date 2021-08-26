/* exported oddOrEven */
function oddOrEven(numbers) {
  var results = [];
  for (var i in numbers) {
    if (!(numbers[i] % 2)) {
      results.push('even');
    } else {
      results.push('odd');
    }
  }
  return results;
}
