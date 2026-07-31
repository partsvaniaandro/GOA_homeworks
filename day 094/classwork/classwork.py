my_list = [
    24, 35, 60, 73, 108,
    127, 156, 199, 216, 221,
    264, 278, 312, 330, 384,
    401, 420, 443, 492, 509
]
new_list = list(filter(lambda x:x%12 == 0 , my_list))
print(new_list)