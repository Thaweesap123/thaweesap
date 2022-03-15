//Arrow function with two arguments
const sum = (firstParam,secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2,5)); //Prints:7

//Arrow funtion with two no arguments
const printHello = () =>{
    console.log("hello");
};
printHello(); //pPrints : hello 

//Arrow function with a single argument
const checkWeight = (weight) =>{
    console.log(`Baggeage weight :${weight} kilograms.`);
};
checkWeight(25); //Prints : Baggage weight : 25 kilograms.


//conise arrow functions
const multiplay = (a,b) => a*b;
console.log(multiplay(2,30)); //Prints :60
