items = {
    "item1": "book",
    "item2": "laptop",
    "item3": "phone",
    "item4": "headphones"
}
bought_items = {

}

amount_buy = int(input("how much items do you want to buy?: "))


if amount_buy == 1:
    item_buy = str(input("what item do you want to buy?: "))
    



if item_buy == "book":
    items.pop("item1")
    bought_items.update({"item1": "book"})
    print("bought the item")

elif item_buy == "laptop":
    items.pop("item2")
    bought_items.update({"item2": "laptop"})
    print("bought the item")

elif item_buy == "phone":
    items.pop("item3")
    bought_items.update({"item3": "phone"})

elif item_buy == "headphones":
    items.pop("item4")
    bought_items.update({"item4": "headphones"})

print(bought_items)




if amount_buy == 2:
    item_buy1 = str(input("what item do you want to buy?: "))
    item_buy2 = str(input("what item do you want to buy?: "))



















if amount_buy == 3:
    for i in range (amount_buy):
        item_buy = str(input("what item do you want to buy?: "))


if amount_buy == 4:
    for i in range (amount_buy):
        item_buy = str(input("what item do you want to buy?: "))


if amount_buy > 4:
    print("we only have 4 items in stock")




#if item_buy == "book":
 #   items.pop("item1")
  #  bought_items.update({"item1": "book"})
   # print("bought the item")

#elif item_buy == "laptop":
 #   items.pop("item2")
  #  bought_items.update({"item2": "laptop"})
   # print("bought the item")

#elif item_buy == "phone":
 #   items.pop("item3")
  #  bought_items.update({"item3": "phone"})

#elif item_buy == "headphones":
 #   items.pop("item4")
  #  bought_items.update({"item4": "headphones"})


    

