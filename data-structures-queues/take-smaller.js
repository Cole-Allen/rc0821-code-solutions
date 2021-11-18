/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const front = queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }
  const two = queue.dequeue();

  if (two < front) {
    queue.enqueue(front);
    return two;
  }
  queue.enqueue(two);
  return front;
}
