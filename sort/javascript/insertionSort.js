function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8];
console.log(`Unsorted ${arr}`);
console.log(`Insertion Sort: ${insertionSort(arr)}`);
