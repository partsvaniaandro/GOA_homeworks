numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
print(min(numbers))

words = ["apple", "lamborghini"]
print(max(words))

temp = [30, 32, 28, 40]
print(min(temp))

price = [100, 500, 50]
print(min(price))

numbers = [1,2,3,4,5,6,7,8,9]
min_number=numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)