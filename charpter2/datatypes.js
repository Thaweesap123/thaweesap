const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    fristName:"Thaweesap",
    lastName:"Krungsri",
};

function sayHallo(person){
    console.log("Hello "+person.fristName);
}

console.log(typeof people);
console.log(typeof sayHallo)
console.log(employee instanceof Array);
sayHallo(employee);