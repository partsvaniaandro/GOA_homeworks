total=0
num1=int(input("please enter your first number:"))
num2=int(input("please enter your second number: "))

for i in range(num1, num2):
    total*=i
print(total)
for i in range(num1, num2):
    total+=i
print(total)

