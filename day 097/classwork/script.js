document.getElementById('input').addEventListener('input', (e)=>{
    let current = e.target.value
    let added = current - last
    let removed = last - current
    let last = current
})