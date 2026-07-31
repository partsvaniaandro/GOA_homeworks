let div = document.getElementById('div');

div.addEventListener('click', function divEvent() {
    div.removeEventListener('click', divEvent);
    let count = 0;
    let interval = setInterval(() => {
        if (count == 0) div.style.opacity = 0;
        if (count == 1) div.style.opacity = 1;
        if (count == 2) {
            div.addEventListener('click', divEvent);
            clearInterval(interval);
        }
        count++;
    }, 1000);
});