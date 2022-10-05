let arr = [1, 2, 5, 3, 4, 6, 7, 9, 11];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let tempArr = [];
  let leftArr = arr.slice(0, Math.floor(arr.length / 2));
  let rightArr = arr.slice(Math.floor(arr.length / 2));
  let leftArrVal = null;
  let rightArrVal = null;
  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);
  // Array of size leftArr + rightArr of sorted values
  let iterations = leftArr.length + rightArr.length;
  for (let i = 0; i < iterations; i++) {
    leftArrVal = leftArr[0];
    rightArrVal = rightArr[0];
    if (rightArr.length === 0) {
      tempArr.push(leftArrVal);
      leftArr.shift();
    } else if (leftArr.length === 0) {
      tempArr.push(rightArrVal);
      rightArr.shift();
    } else if (leftArrVal < rightArrVal) {
      tempArr.push(leftArrVal);
      leftArr.shift();
    } else {
      tempArr.push(rightArrVal);
      rightArr.shift();
    }
  }
  return tempArr;
}
