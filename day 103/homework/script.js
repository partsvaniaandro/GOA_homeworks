let images = ['images/cat1.png', 'images/cat2.png', 'images/cat3.png', 'images/cat4.png']
let imgContainer = document.getElementById('imageContainer')
let i = 0
document.getElementById('nextBtn').addEventListener('click', () => {
    i = (i+1) % images.length
    imgContainer.src = images[i]
})

document.getElementById('prevBtn').addEventListener('click', () => {
    i = (i-1 + images.length) % images.length
    imgContainer.src = images[i]
})