# დაასრულეთ საკლასო დავალება რომელსაც ნახავთ   cw_28- ში
# დაწერეთ მარტივი პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს თავისი სახელი და შემდეგ დაბეჭდოს მისალოცი შეტყობინება მათი სახელით.
#დაწერეთ პროგრამა სადაც შემოიტანთ თქვენი ოჯახის წევრების ასაკებს თქვენი დავალება იქნება რომ დაპრინტოთ რამდენი წლისები იქნებიან 20 წლის შემდეგ
#დაწერეთ პროგრამა სადაც მომხმარებელს შემოატანინებთ ინფორმაციას თავის თავზე (name,surname,age,address,gmail) და შემდეგ დაუპრინტეთ ეს ინფორმაცია ერთ დიდ წინადადებად


#1)ვითხოვ მომხმარებლის სახელს
user_name = str(input("please enter your name: "))
#2)ვითხოვ მომხმარებლის გვარს
user_surname = str(input("please enter your surname: "))
#3)ვითხოვ მომხმარებლის წლოვანებას
user_age = str(input("please enter your age: "))
#ვითხოვ მომხმარებლის მისამართს
user_adress = str(input("please enter your adress: "))
#ვითხოვ მომხმარებლის ემაილს
user_gmail = str(input("please enter your gmail: "))
print(" ")

#ვპრინტავ მიღებულ ინფორმაციას
print("name" + " " + "=" + " " + user_name)
print("")
print("surname" + " " + "=" + " " + user_surname)
print(" ")
print("age" + " " + "=" + " " + user_age)
print(" ")
print("adress" + " " + "=" + " " + user_adress)
print(" ")
print("gmail" + " " + "=" + " " + user_gmail)
print(" ")

#ვულოცავ მომხმარებელს დარეგისტრირებას
print("registration done, congratulations" + " " + user_name + "!")