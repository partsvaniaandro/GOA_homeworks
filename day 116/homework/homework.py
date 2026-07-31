numbers = [1,2,3,4,5]
numbersMap = list(map(lambda n: n*2, numbers))
print(numbersMap)

numbersFilter = list(filter(lambda n: n%2 != 0, numbers))
print(numbersFilter)

words = ['hello', 'world']
wordsCap = list(map(lambda x: x.upper(), words))
print(wordsCap)

words = ['hi', 'friend']
wordsFilter = list(filter(lambda x: len(x)>5, words))
print(wordsFilter)