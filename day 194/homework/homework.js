for(let i = 0; i < n; i++) {
    console.log(i);
}
//ამ კოდის დროებითი სირთულე არის O(n)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
//ამ კოდის დრობითი სირთულე არის O(n^2)

let i = 1;

while(i < n) {
    console.log(i);
    i *= 2;
}
//ამ კოდის დროითი სირთულე არის O(log n)

for(let i = 0; i < n; i++) {
    console.log(i);
}

for(let j = 0; j < n; j++) {
    console.log(j);
}
//ამ კოდის დროითი სირთულე არის O(n)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
//ამ კოდის დროითი სირთულე არის O(n^2)