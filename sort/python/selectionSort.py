def selectionSort(arr):
    for i in range(len(arr) - 1):
        tmpIndex = i
        for j in range(i + 1, len(arr)):
            if arr[tmpIndex] > arr[j]:
                arr[tmpIndex], arr[j] = arr[j], arr[tmpIndex]
    return arr


arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8]
print("Unsorted:", arr)
print("Selection Sort:", selectionSort(arr))
