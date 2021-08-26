/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var i = 0; i < number + 1; i++) {
    numbers.unshift(i);
  }
  return numbers;
}
