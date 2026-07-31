document.getElementById("image").width = "300"
    document.getElementById("image").height = "180"
function change1(){
    document.getElementById("image").src = "1.png"
    document.getElementById("image").width = "300"
    document.getElementById("image").height = "180"
}
function change2(){
    document.getElementById("image").src = "2.png"
    document.getElementById("image").width = "300"
    document.getElementById("image").height = "180"
}
document.getElementById("img1").addEventListener("click", change1)
document.getElementById("img2").addEventListener("click", change2)
document.getElementById("body").style.textAlign = "center"
document.getElementById("body").style.marginTop = "300px"