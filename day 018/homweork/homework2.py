bought_items = {

}

amount_buy = int(input("how much items do you want to buy?: "))

for item in range(amount_buy):
    item_buy = (input("what items do you want to buy?: "))
    bought_items.update({item: item_buy})
    item=item+1

print("you bought:")
print(bought_items)