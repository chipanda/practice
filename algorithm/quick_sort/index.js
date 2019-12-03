function quickSort(arr, from, end) {
  if (from >= end) {
    return arr;
  }
  let i = from;
  let j = end;
  while (i < j) {
    while(i < j && arr[j] >= arr[i]) {
      j -= 1;
    }
    if (j > i) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
    }
    while(i < j && arr[i] <= arr[j]) {
      i += 1;
    }
    if (j > i) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j -= 1;
    }
  }
  quickSort(arr, from, i - 1);
  quickSort(arr, i + 1, end);
  return arr;
}
function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  quickSort(arr, 0, arr.length - 1);
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
