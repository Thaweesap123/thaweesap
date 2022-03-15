function numberSplits(num){
    let sum =[];
    sum[0] = Math.floor(num/2);
    if (num < 0 ){
        sum[1]=Math.round(num/2);
    }
    else{
    sum[1] = Math.floor(num/2 + num%2);
    }
    return sum;
}

console.log(numberSplits(4));
console.log(numberSplits(10));
console.log(numberSplits(11));
console.log(numberSplits(-9));