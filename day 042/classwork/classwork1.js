const paragraph = document.getElementById("paragraph");
const show = document.getElementById("show");
const hide = document.getElementById("hide");
paragraph.style.color = "transparent";
show.addEventListener('click', function() {
     paragraph.style.color = "black";
})
hide.addEventListener('click', function() {
    paragraph.style.color = "transparent";
})