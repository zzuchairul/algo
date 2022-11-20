function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

const arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8];
console.log(`Unsorted: ${arr}`);
console.log(`Sorted with Bubble Sort: ${bubbleSort(arr)}`);
