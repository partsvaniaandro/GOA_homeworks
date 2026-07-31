let first = false
let divs10 = document.getElementById('divs10')
window.onload = function() {
    function addDiv(){
        for(let i = 0; i<10; i++){
            let element = document.createElement('div')
            element.style.backgroundColor = '#FF0000'
            element.style.width = '100px'
            element.style.height = '50px'
            element.style.margin = '5px'

            if (first == false){
                divs10.appendChild(element)
                first = true
                continue
            }
            if (first == true){
                element.style.backgroundColor = '#00FF00'
                divs10.prepend(element)
                first = false
            }
        }
    }
    addDiv()
  };