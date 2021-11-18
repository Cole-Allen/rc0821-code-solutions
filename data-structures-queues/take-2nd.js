/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const front = queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }
  queue.enqueue(front);
  return queue.dequeue();

}
