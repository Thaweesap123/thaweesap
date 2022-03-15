function simplePair(num,sum){
    for (let i = 0; i < num.length; i++) {
		for (let j = i + 1 ; j < num.length ; j++) {
			if (num[i] * num[j] == sum) 
            return [num[i], num[j]]
		}
	}
	return null 
}
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));