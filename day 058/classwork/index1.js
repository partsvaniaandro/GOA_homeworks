function grade(score){
    if(score < 0.6 || score > 1){
        console.log("F")
    }
    else if(score >= 0.6 && score < 0.7){
        console.log("D")
    }
    else if(score >= 0.7 && score < 0.8){
        console.log("C")
    }
    else if(score >= 0.8 && score < 0.9){
        console.log("B")
    }
    else if(score >= 0.9 && score < 1){
        console.log("A")
    }
}
grade(0.6)