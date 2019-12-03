function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  for (let n = arr.length; n > 1; n -= 1) {
    let lastNotLeafIndex = Math.floor((n / 2) - 1);
    for (let i = lastNotLeafIndex;i >= 0;i -= 1) {
      let leftChild = 2 * i + 1;
      let rightChild = 2 * i + 2;
      if (leftChild < n && arr[leftChild] > arr[i]) {
        [arr[leftChild], arr[i]] = [arr[i], arr[leftChild]];
      }
      if (rightChild < n && arr[rightChild] > arr[i]) {
        [arr[rightChild], arr[i]] = [arr[i], arr[rightChild]];
      }
    }
    [arr[n-1], arr[0]] = [arr[0], arr[n-1]];
  }
  return arr;
}

const test1 = [5, 4, 3, 2, 1];
const test2 = [1, 2, 3, 4, 5];
const test3 = [1, 2, 3, 4, 3, 2, 1];
const test4 = [3, 2, 1, 5, 6, 7, 3, 8, 6];
console.log(sort(test1));
console.log(sort(test2));
console.log(sort(test3));
console.log(sort(test4));
