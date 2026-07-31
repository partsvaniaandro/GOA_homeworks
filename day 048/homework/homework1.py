def function(num):
    for num1 in range(1, num + 1):
        for num2 in range(1, num + 1):
            if num2 > num1:
                print((num1, num2))
function(3)