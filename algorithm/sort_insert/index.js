function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
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
