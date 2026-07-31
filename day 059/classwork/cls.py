def matrix(num):
    result = []
    for i in range(num):
        row = []
        for j in range(num):
            if i == j:
                row.append(1)
            else:
                row.append(0)
        result.append(row)
    for row in result:
        print(row)

matrix(3)