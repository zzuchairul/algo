def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr


arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8]
print('Unsorted:', arr)
print('Insertion Sort:', insertionSort(arr))
