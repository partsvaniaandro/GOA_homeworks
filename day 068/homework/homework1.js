function allZeroes(num) {
    while (true) {
        let str = num.toString();
        let zeroes = true;
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== '0') {
                zeroes = false;
                break;
            }
        }
        if (zeroes) {
            return num;
        }
        num++;
    }
}