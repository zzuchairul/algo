function merge(arr, left, mid, right) {
  const lenLeft = mid - left + 1;
  const lenRight = right - mid;

  const leftPart = arr.slice(left, mid + 1);
  const rightPart = arr.slice(mid + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < lenLeft && j < lenRight) {
    if (leftPart[i] <= rightPart[j]) {
      arr[k] = leftPart[i];
      i++;
    } else {
      arr[k] = rightPart[j];
      j++;
    }
    k++;
  }

  while (i < lenLeft) {
    arr[k] = leftPart[i];
    i++;
    k++;
  }

  while (j < lenRight) {
    arr[k] = rightPart[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) return;
  let mid = left + parseInt((right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

const arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8];
console.log(`Unsorted ${arr}`);
mergeSort(arr, 0, arr.length - 1);
console.log(`Merge Sort: ${arr}`);
