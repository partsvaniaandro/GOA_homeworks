let books = new Map()
books.set('არავინ არ ჩამორჩება', 'გურამ დოჩანაშვილი')
books.set('საკვირველი ქალაქი', 'ოთარ ჭილაძე')
books.set('ცისფერი მთები', 'ჩაბუა ამირეჯიბი')
for(const [key, value] of books){
    console.log(`${key} - ${value}`)
}