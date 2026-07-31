function myfunc(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(child =>{
            console.log(child.textContent)
        })
    }
    else{
        console.log('this element has no text!')
    }
}