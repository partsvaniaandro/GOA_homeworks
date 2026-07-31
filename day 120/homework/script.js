let people = new Map()
people.set("ლაშა", 26)
people.set("ნიკა", 19)
people.set("გიორგი", 22)
console.log("starting map:", Array.from(people))

currentAge = people.get('ლაშა')
people.set("ლაშა", currentAge + 1)

people.delete('ნიკა')
console.log("final result:", Array.from(people))