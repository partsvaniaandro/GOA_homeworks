document.addEventListener('DOMContentLoaded', function () {
    let divSize = 10;

    for (let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.backgroundColor = "lightblue";
        div.style.margin = "5px";

        
        document.body.prepend(div);

        
        document.body.appendChild(div);

        divSize *= 2;
    }
});