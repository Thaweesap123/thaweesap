function getBudgets(Peple){
    var sum = 0;
    for(let i = 0 ; i < Peple.length ; i++){
        sum = sum+Peple[i].buget;
    }
    return sum
}
console.log(getBudgets([
    {name: "john", age: 21, buget: 23000},
    {name: "Steve", age: 32, buget: 40000},
    {name: "Martin", age: 21, buget: 2700}
]));

console.log(getBudgets([
    {name: "john", age: 21, buget: 29000},
    {name: "Steve", age: 32, buget: 32000},
    {name: "Martin", age: 21, buget: 1600}
]));