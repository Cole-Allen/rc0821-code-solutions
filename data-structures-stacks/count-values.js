/* exported countValues */

function countValues(stack) {
  if (stack.peek() === undefined) {
    return 0;
  } else {
    let i = 0;
    while (stack.pop() !== undefined) {
      i++;
    }
    return i;
  }
}
