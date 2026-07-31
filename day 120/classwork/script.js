//დაწერე ფუნქცია, რომელიც იღებს ორ სტრიქონების მასივს და აბრუნებს Set-ს იმ სიტყვებით, რომლებიც ორივე მასივში გვხვდება (გამოიყენე Set ოპერაციები).
function sameWords(arr1, arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    return [...set1].filter(word => set2.has(word))
}

console.log(sameWords([1,2,3,4], [3,4,5,6]))