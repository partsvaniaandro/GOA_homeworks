def slicing(string, num):
    sliced = string[num:]
    print (sliced)
    return sliced
slicing('apple', 2)

x = "Hello World"

print(x[2:6:1])
#* კოდი გამოიტანს: "llo "
#* პირველი გადაცემული არგუმენტი საიდანაც დაიწყება slicing (ამ ინდექსს ჩათვლის)
#* მეორე გადაცემული არგუმენტი სადაც დამთავრდება slicing (ამ ინდექსს არ ჩათვლის)
#* მესამე გადაცემული არგუმენტი ნიშნავს რამდენ ნაბიჯს გადაადგამს


def reverse(sentence):
    words = sentence.split(" ")
    reversed = []
    for i in range(len(words)):
        reversed.append(words[i][::-1])
    joined = " ".join(reversed)
    print(joined)
    return joined
reverse("hello world")