class Dog {
    constructor(name){
        this._name = name;
    }
    introduce(){
        console.log("This is " + this._name + " ! ");
    }
    // A static method
    static bark(){
        console.log("woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
const myDog2 = new Dog("Paolo");
myDog.introduce();

// Calling the static method
Dog.bark();