my_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
def function(array_2d):
    array_new=[]
    for row in array_2d:
        new_row = [i for i in row if i % 2 == 0]
        array_new.append(new_row)
    print (array_new)
function(my_array)