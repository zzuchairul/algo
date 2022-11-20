function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let tmpIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[tmpIndex] > arr[j]) {
        tmpIndex = j;
      }
    }
    let tmp = arr[tmpIndex];
    arr[tmpIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

const arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8];
console.log(`Unsorted: ${arr}`);
console.log(`Selection Sort: ${selectionSort(arr)}`);
