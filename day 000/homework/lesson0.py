from turtle import*

speed(10)

#drawing "square room"

color("brown")

fillcolor("brown")

begin_fill()

width(5)

forward(400)
left(90)

forward(200)
left(90)

forward(400)
left(90)

forward(200) #drew "square room"

end_fill()


left(90)

forward(160)

#drawing door

color("grey")

fillcolor("grey")

begin_fill()

width(3)

left(90)

forward(110)
right(90)

forward(80)
right(90)

forward(110) #drew "door"

end_fill()

penup()

goto(400, 200)

pendown()

#drawing "roof"

fillcolor("green")

begin_fill()

color("green")

width("20")

right(130)
forward(275)

left(83)
forward(260) #drew "roof"

end_fill()

penup()

goto(50, 110)

pendown()

#drawing "left window"

width(3)

color("grey")

fillcolor("black")

begin_fill()

left(47)
forward(60)

left(90)
forward(60)

left(90)
forward(60)

left(90)
forward(60)

end_fill()

left(180)
forward(30)

right(90)
forward(30)

left(90)
forward(30)

left(180)
forward(60)

left(180)
forward(30)

right(90)
forward(30) #drew "left window"

penup()

goto(290, 110)

pendown()

#drawing "right window"

color("gray")

fillcolor("black")

begin_fill()

left(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

end_fill()

right(90)
forward(30)

right(90)
forward(30)

left(90)
forward(30)

left(180)
forward(60)

left(180)
forward(30)

right(90)
forward(30) #drew "right window"










exitonclick()