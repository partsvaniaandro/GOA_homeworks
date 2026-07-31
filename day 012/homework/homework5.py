user_budget = int(input("please enter your budget: "))
user_basket = int(input("enter the price of the product you want to buy: "))
if user_budget >= user_basket:
    print("you can buy this item!")
else:
    print("you can not buy this item")