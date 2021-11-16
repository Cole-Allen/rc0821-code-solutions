/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 1 * n = O(n)
    if (!seen[word]) {              // 2 * n = O(n)
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 2 * n = O(n)
      c++                           // 2 * n = O(n)
    ) {
      const comparing = words[c];   // 1 * n = O(n)
      if (comparing === word) {     // 1 * 1 = O(1)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n)
