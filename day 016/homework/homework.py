#1) იპოვეთ ლისტში ყველაზე პატარა წევრი min ფუნქციის გამოყენების გარეშე.

#2) იპოვეთ ლისტში ყველაზე დიდი წევრი max ფუნქციის გამოყენების გარეშე.

#3) შემოგდით სია სადაც არის მინიმუმ 6 ელემენტი და თქვენი დავალებაა გამოიტანოთ 1 - 3 და 5 წევრების ინდექსები.

#4) შემოგდით 2 სია აქედან ერთში არის მხოლოდ ინტეჯერები და მეორეში არის მხოლოდ სტრინგები. თქვენი დავალებაა გააერთიანოთ ეს ორი ლისტი ისე რომ ყოველი ინტეჯერის შემდეგ მოდიოდეს სტრინგი(ანუ თანმიმდევრობით str - int - str - int ან პირიქით).

#5) შემოგდით სია სადაც არის სტრინგები და ინტეჯერები. თქვენი დავალებაა ამ სიიდან ამოიღოთ თოეული წევრი და ინტეჯერები მოატავსოთ ცალკე სიაში ხოლო სტრინგები ცალკე სიაში.

#6) შემოგდით 4 სია და თქვენი დავალებაა ამ ორი სიიდან ამოიღოთ კენტები და ლუწები და დაპრინტოთ მათი ჯამი ცალ-ცალკე.

#7) შემოგდით 4 სია და თქვენი დავალებაა ამ სიებიდან ამოიღოთ კენტები და ლუწები და განათავსოთ ისინი ორ სხვადასხვა სიაში.

#8) შემოგდით სია სადაც არის მხოლოდ სტრინგები და თქვენ გევალებათ გაიგოთ ყველა ამ ელემენტების სიგრძე შეიყვანოთ მეორე სიაში(იგივე თანმიმდევრობით).

#9) შემოგდით რამდენიმე სია (სტრინგებიც და ინტეჯერებიც) თქვენი დავალებაა ყველა ინტეჯერი შეკრიბოთ და ყველა სტრინგი შეაერთოთ.

#10) შემოგდით სია თქვენი ადვალებაა ამ სიიდან ლუწ ინდექსე მყოფი ელემენტები გადაიტანოთ ახალ სიაში საბოლოოდ კი გამოიტანოთ ტერმინალში.


numbers = [1,2,3,4,5,6,7,8,9]
max_number=numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number
print(max_number)



numbers = [1,2,3,4,5,6,7,8,9]
min_number=numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)

list = ["apple", "pineapple",  "watermelon", "peach", "grapes", "cherry"]
print(list.index("apple"))
print(list.index("pineapple"))
print(list.index("watermelon"))
print(list.index("grapes"))

combined_list = [1, "one", 2, "two", 3, "three"]
int_list = []
str_list = []
int_list.append(combined_list.pop(0))
int_list.append(combined_list.pop(1))
int_list.append(combined_list.pop(2))

str_list.append(combined_list.pop(0))
str_list.append(combined_list.pop(0))
str_list.append(combined_list.pop(0))
print(str_list)
print(int_list)


