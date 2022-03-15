function highestDigit(num){
    let t=[] ;
    number = num.toString();
    for (var i = 0; i < number.length; i++){
        t[i] = number[i]
    }
    return Math.max(...t)
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));