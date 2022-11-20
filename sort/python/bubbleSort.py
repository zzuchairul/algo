def bubbleSort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8]
print("Unsorted:", arr)
print("Bubble Sort:", bubbleSort(arr))
