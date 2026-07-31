document.body.innerHTML = '<div><p>hello</p></div>'.repeat(10)
paragraphs = document.querySelectorAll('div p')
for(let i = 0; i<paragraphs.length; i++){
    paragraphs[i].style.fontSize = '4px'
}