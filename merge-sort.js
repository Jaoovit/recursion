const firstExample = [3, 2, 1, 13, 8, 5, 0, 1];

const secondExample = [105, 79, 100, 110];

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  }
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = arr.length / 2;
  let arr1 = mergeSort(arr.slice(0, middle));
  let arr2 = mergeSort(arr.slice(middle, arr.length));

  return merge(arr1, arr2);
}

console.log(mergeSort(firstExample));
