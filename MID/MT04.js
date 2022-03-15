function totalVolume(...number){
    return number.map(num => num.reduce(( accumulator , currentValue ) => accumulator * currentValue )).reduce(( accumulator , currentValue) => accumulator + currentValue ,0)
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
