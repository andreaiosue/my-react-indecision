class Person {
    constructor(name = 'Anonymous', age = 0) { //constructor + default parameters' values
        this.name = name;
        this.age = age;
    } //no commas, this is an ES6 class, not an ES5 object
    getGreeting() {
        return `Hi. I am ${this.name}!`; //template string
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person { //inheritance
    constructor(name, age, major) {
        super(name, age); //constructor of superclass
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //flip twice technique: !!'abc' = true - !!undefined = false
    }
    getDescription() { //method overriding
        let description = super.getDescription(); //call to superclass' method
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}


//ex
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Andrea', 32, 'Rome');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());