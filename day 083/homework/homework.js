let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let date = document.getElementById('date')
function updateTime(){
    setInterval(function(){
        let current = new Date()
        hour.textContent = String(current.getHours()).padStart(2, "0")
        minute.textContent = String(current.getMinutes()).padStart(2, "0")
        second.textContent = String(current.getSeconds()).padStart(2, "0")
        date.textContent = current.toLocaleDateString()
    }, 1000)
}

document.addEventListener('DOMContentLoaded', updateTime)