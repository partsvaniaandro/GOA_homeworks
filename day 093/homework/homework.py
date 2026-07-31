greet = lambda name : f"hello {name}"
print(greet("andria"))

list1 = [1, 2, 3, 4, 5]
newList = list(map(lambda x: x + x, list1))
print(newList)


listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]
filtered = list(filter(lambda num: num % 5 == 0, listn))
print(filtered)

