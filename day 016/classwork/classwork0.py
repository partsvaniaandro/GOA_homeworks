cars = ["lamborghini", "bugatti", "ferrari", "BMW", "mercedes"]
newcar=(cars[0:3])
new_CarList = [newcar]
print(new_CarList)

fruits = ["watermelon", "apple", "peach", "grapes"]
index1 = fruits.index("watermelon")
index2 = fruits.index("grapes")
index3 = fruits.index("peach")
print(index1, index2, index3)

#list = [2, 4, 6, 8, 10]
#newList = []
#for i in list:
    #list.pop(max(list))
#print(newList)
#?????????

names = ["andria", "lizi", "badri", "elguja"]
reversednames = []
for i in range (len(names) - 1, -1, -1):
    reversednames.append(names[i])

print(reversednames)