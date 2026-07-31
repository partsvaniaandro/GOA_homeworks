const box = document.getElementById("box");

// ფერები შესაცვლელად
const colors = ["red", "blue", "green", "purple", "orange", "yellow"];

// ყოველ 5 წამში იცვლება ფერი
setInterval(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
}, 5000);

// ყოველ 5 წამში იცვლება border-radius
setInterval(() => {
  const randomRadius = Math.floor(Math.random() * 100);//ან 0 ან 100 (1 * 100)
  box.style.borderRadius = `${randomRadius}%`;
}, 5000);