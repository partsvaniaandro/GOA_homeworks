a = input("Enter the first number: ")
b = input("Enter the second number: ")
# if a is b: - Compares id's, and can cause inconsistencies. Use == instead.
if a == b:
  print ("Both inputs are equal")
else:
  print ("Your input is not equal.")