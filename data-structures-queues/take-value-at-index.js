/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let i = 0;
  while (i < index) {
    i++;
    const c = queue.dequeue();
    queue.enqueue(c);
  }
  return queue.dequeue();

}
