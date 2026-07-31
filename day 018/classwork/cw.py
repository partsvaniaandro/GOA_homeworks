car = {
    "mark": "Toyota",
    "name": "Corolla",
    "year": 2020,
    "engine": "1.8L"
}

user = {
    "name":"andria",
    "age":"16"
}
user.update({"email":"ablabudaandro2@gmail.com"})
user["surname"] = "farcvania"

for value in user.values():
    print(value)



my_dict = {}

for i in range(1, 1001):
    my_dict[f"item_{i}"] = i
print(my_dict)