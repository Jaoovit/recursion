// function to find fibonacci sequence using iteration

function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

console.log(fibs(8));

// function to find fibonacci sequence using recursive

let arr = [0, 1];

function fibsRec(n) {
  if (n === 2) {
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibsRec(n - 1);
    return arr;
  }
}

console.log(fibsRec(2));
