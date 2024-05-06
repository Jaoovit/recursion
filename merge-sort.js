const firstExample = [3, 2, 1, 13, 8, 5, 0, 1];

const secondExample = [105, 79, 100, 110];

function mergeSort(arr) {
  const middle = arr.length / 2;
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle, middle + arr.length);
  if (arr.length == 1) {
    //console.log(arr1, arr2);
  } else {
    //arr1.sort((a, b) => a - b);
    //arr2.sort((a, b) => a - b);
    mergeSort(arr1);
    mergeSort(arr2);
    console.log(arr1, arr2);
  }
}

console.log(mergeSort(firstExample));
