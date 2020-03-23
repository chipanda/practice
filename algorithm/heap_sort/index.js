function maxHeap(arr, cur, size) {
  let leftIndex = 2 * cur + 1;
  let rightIndex = 2 * cur + 2;
  let maxIndex = cur;
  if (leftIndex < size && arr[leftIndex] > arr[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < size && arr[rightIndex] > arr[maxIndex]) {
    maxIndex = rightIndex;
  }
  if (maxIndex !== cur) {
    [arr[maxIndex], arr[cur]] = [arr[cur], arr[maxIndex]];
    maxHeap(arr, maxIndex, size); // 确保子树仍符合最大堆
  }
}
function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  // 先构造最大堆
  for (let i = Math.floor(arr.length / 2) - 1; i >=0; i -=1) {
    maxHeap(arr, i, arr.length);
  }
  for (let i = arr.length - 1; i > 0; i -= 1) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeap(arr, 0, i);
  }
}

const test1 = [5, 4, 3, 2, 1];
const test2 = [1, 2, 3, 4, 5];
const test3 = [1, 2, 3, 4, 3, 2, 1];
const test4 = [3, 2, 1, 5, 6, 7, 3, 8, 6];
console.log(sort(test1));
console.log(sort(test2));
console.log(sort(test3));
console.log(sort(test4));
