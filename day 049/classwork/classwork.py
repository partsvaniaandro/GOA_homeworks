arr = [
    [False, False, False],
    [True, True, True],
    [False, False, False]
]

for i in range(len(arr)):
    for n in range(len(arr[i])):
        if arr[i][n] == True:
            arr[i][n] = False
        elif arr[i][n] == False:
            arr[i][n] = True
print(arr)