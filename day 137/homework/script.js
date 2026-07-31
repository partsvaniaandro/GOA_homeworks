// let sumsObj = {
//     'evenSum':0,
//     'oddSum':0
// }
// function returnSums(arr){
//     let sumEven = 0
//     let sumOdd = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             sumEven += arr[i]
//         }
//         else{
//             sumOdd += arr[i]
//         }
//     }
//     sumsObj.evenSum = sumEven
//     sumsObj.oddSum = sumOdd
// }


// function specialWords(str){
//     let uniqueWords = []
//     let currentWord = ''
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == ' '){
//             let indicator = true
//             for(let j = 0; j<uniqueWords.length; j++){
//                 if(currentWord == uniqueWords[j]){
//                     indicator = false
//                     break;
//                 }
//             }
//             if(indicator){
//                 uniqueWords.push(currentWord)
//             }
//             currentWord = ''
//         }
//         else{
//             currentWord += str[i]
//         }
//     }
//     indicator = true
//     for(let i = 0; i<uniqueWords.length; i++){
//         if(currentWord == uniqueWords[i]){
//             indicator = false
//             break;
//         }
//     }
//     if(currentWord != '' && indicator){
//         uniqueWords.push(currentWord)
//     }
//     return uniqueWords
// }



// function longestWord(str){
//     let longestCount = 0
//     let currentCount = 0
//     let currentWord = ''
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == ' '){
//             currentCount = currentWord.length
//             if (currentCount > longestCount){
//                 longestCount = currentCount
//             }
//             currentWord = ''
//         }
//         else{
//             currentWord += str[i]
//         }
//     }
//     return longestCount
// }