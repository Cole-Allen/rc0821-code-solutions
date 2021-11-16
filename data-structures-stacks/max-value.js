/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let max = stack.pop();
    while (stack.peek() !== undefined) {
      const c = stack.pop();
      if (c > max) {
        max = c;
      }
    }
    return max;
  }

}
