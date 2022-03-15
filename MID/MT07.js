function sumTwoSmallestNumbers(number) {
    number.sort(function (a, b) {
        if (a <= b && a >= 0 && b >= 0)
            return a - b;
    });
    return number[0] + number[1]
}


console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNumbers([2, 9, 6, -1]));
console.log(sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNumbers([3683, 2902, 3951, -475, 1617, -2385]));
