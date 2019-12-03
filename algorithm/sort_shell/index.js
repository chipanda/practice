function sort(arr = []) {
  if (!Array.isArray(arr) || arr.length === 1) {
    return arr;
  }
  for (let step = Math.floor(arr.length / 2); step > 0; step = Math.floor(step / 2)) {
    // 初始，step前的每个元素作为step个有序数组的第一个元素，从step开始至末尾每个元素都执行一次选择排序(以step间隔的元素为一组)
    for (let i = step; i < arr.length; i += 1) {
      for (let j = i - step; j >= 0; j -= step) {
        if (arr[j + step] < arr[j]) {
          [arr[j], arr[j + step]] = [arr[j + step], arr[j]];
        } else {
          break;
        }
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
