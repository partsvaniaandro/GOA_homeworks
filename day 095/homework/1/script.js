let htmlTags = ["div", "p", "a", "span", "img", "ul", "li", "h1", "input"]
function addTagToBody(){
    let randomTagIndex = Math.floor(Math.random() * htmlTags.length)
    let randomTag = htmlTags[randomTagIndex]
    let newElement = document.createElement(randomTag)
    document.body.appendChild(newElement)
}
document.getElementById('addTagBtn').addEventListener('click', addTagToBody)




let shape = document.getElementById('shape')
shape.style.width = "100px";
shape.style.height = "100px";
shape.style.backgroundColor = "blue";
shape.style.transition = "border-radius 2s";
shape.style.borderRadius = "0%";

shape.addEventListener("click", () => {
  shape.style.borderRadius = "50%";

  setTimeout(() => {
    shape.style.borderRadius = "0%";
  }, 2000);
});