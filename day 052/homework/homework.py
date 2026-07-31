
def count_area(*args):
    if len(args) == 1:
        pi = 3.14159
        circle_area = pi * args[0] ** 2
        print (circle_area)
    elif len(args) == 2:
        square_area = args[0] * args[1]
        print (square_area)
    elif len(args) == 3:
        s = (args[0] + args[1] + args[2]) / 2
        triangle_area = (s*(s - args[0])*(s - args[1])*(s - args[2])) ** 0.5
        print (triangle_area)
    else:
        ("no more calculators")
        
count_area(2, 2, 2)