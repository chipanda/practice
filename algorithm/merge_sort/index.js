function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid + 1);
  let rightArr = arr.slice(mid + 1, right + 1);
  let index = left;
  while(index <= right) {
    if (leftArr.length === 0 || rightArr[0] < leftArr[0]) {
      arr[index] = rightArr.shift();
    } else if (rightArr.length === 0 || leftArr[0] <= rightArr[0]) {
      arr[index] = leftArr.shift();
    }
    index += 1;
  }
}
function merge_sort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((right + left) / 2);
  merge_sort(arr, left, mid);
  merge_sort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}
function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  merge_sort(arr, 0, arr.length - 1);
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
