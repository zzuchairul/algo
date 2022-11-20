def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2

        leftPart = arr[:mid]
        rightPart = arr[mid:]

        mergeSort(leftPart)
        mergeSort(rightPart)

        lenLeft = len(leftPart)
        lenRight = len(rightPart)

        i = j = k = 0
        while i < lenLeft and j < lenRight:
            if leftPart[i] <= rightPart[j]:
                arr[k] = leftPart[i]
                i += 1
            else:
                arr[k] = rightPart[j]
                j += 1
            k += 1

        while i < lenLeft:
            arr[k] = leftPart[i]
            i += 1
            k += 1

        while j < lenLeft:
            arr[k] = rightPart[j]
            j += 1
            k += 1


arr = [2, 6, 4, 3, 10, 9, 1, 5, 7, 8]
print('Unsorted:', arr)
mergeSort(arr)
print('Merge Sort:', arr)
