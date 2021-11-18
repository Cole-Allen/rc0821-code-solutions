/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let c = queue.dequeue();
  while (true) {
    const s = queue.peek();
    if (s === undefined) {
      return c;
    }
    if (c <= s) {
      return c;
    }
    queue.enqueue(c);
    c = queue.dequeue();
  }

}
