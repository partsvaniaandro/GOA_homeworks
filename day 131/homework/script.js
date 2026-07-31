//localstorage გამოიყენება მომხმარებლის მონაცემების შესანახად თავიანთ ბრაუზერზე, გვერდი რომც დარეფრეშდეს, ან ბრაუზერი გამოირთოს, მონაცემები მაინც შენახული დარჩება.
//locanstorage-ს მეთოდები:
//? locanStorage.setItem('key', value) ვამატებთ ახალ მონაცემს
//? localStorage.getItem('key) ვიღებთ უკვე დამატებულ მონაცემს
//? localStorage.removeItem('key') ვშლით სპეციფიკურ მონაცემს
//? localStorage.clear() ვშლით ყველა მონაცემს
//? localStorage.key(index) ვიღებთ გასაღების სახელს ინდექსის მიხედვით
//? localStorage.length გვიჩვენებს რიცხვს შენახული მონაცემების~

//TODO 6) სად შეგვიძლია ვნახოთ შენახული მონაცემები?
//* მრავალი გზა არსებობს. შეგვიძლია კონსოლში გამოვიტანოთ, ან ბრაუზერიდან ვნახოთ inspect-ით

localStorage.setItem('name', 'andria')
console.log(`name : ${localStorage.getItem('name')}`)

let numArray = [1, 2, 3, 4, 5]
localStorage.setItem('array', numArray)
console.log(`array : ${localStorage.getItem('array')}`)
