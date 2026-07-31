#რიცხვები
numbers = [1,2,3,4,5,6,7,8,9]
#დიდი რიცხვის ცვლადი = რიცხვების პირველ რიცხვს 1-ს
max_number=numbers[0]
for number in numbers:
    #თუ 1 ნაკლებია დანარჩენებზე, 1=
    if max_number < number:
        max_number = number
print(max_number)



numbers = [1,2,3,4,5,6,7,8,9]
min_number=numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)