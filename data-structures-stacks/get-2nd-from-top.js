/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  const sec = stack.peek();
  if (top !== undefined) {
    stack.push(top);
  }
  return sec;
}
