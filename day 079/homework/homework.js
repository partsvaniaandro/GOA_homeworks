function yearType(year){
    if(year % 4 == 0 && year % 100 != 0){
        console.log(`${year} -- yes`) 
        return;
    }
    else if(year % 400 == 0){
        console.log(`${year} -- yes`) 
        return;
    }
    else{
        console.log(`${year} -- no`) 
    }
    let i = 0
    while (true){
        i += 1
        if(((year + i) %4 == 0 && (year + i) %100 != 0) || (year + i) %400 == 0){
            console.log(year + i) 
            break;
        }
        else if (((year - i) %4 == 0 && (year - i) %100 != 0) || (year - i) %400 == 0){
            console.log(year - i) 
            break;
        }
    }
}
yearType(2009)