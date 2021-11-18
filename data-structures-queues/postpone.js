/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return queue;
  }
  const front = queue.dequeue();
  queue.enqueue(front);
  return queue;

}
