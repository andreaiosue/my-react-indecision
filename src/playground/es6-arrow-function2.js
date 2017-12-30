// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); //ES5 functions pass in an arguments object containing all the arguments passed by the caller (even non declared arguments like 1001 in the example)
    return a + b;
}
console.log(add(55, 1, 1001));

const add2 = (a, b) => {
    //console.log(arguments); //arguments object not defined in ES6 arrow functions
    return a + b;
}
console.log(add2(55, 2, 1001)); //the third argument gets passed but ignored by the function



//this keyword - no longer bound

const user = {
    name: 'Andrea',
    cities: ['Rome', 'London', 'Paris'],
    printPlacesLived: function() {
        console.log(this.name); //ES5: when we add a function onto an object property, the function binds the reference to the object it gets attached to in its own this value
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function(city) {
            //console.log(this.name + ' has lived in ' + city); //ERROR a regular anonymous function in ES5, not attached to any object, doesn't bind anything in its own this value
            console.log(that.name + ' has lived in ' + city); //works - this is workaround: we use the this value of the outer function, binding the object it is attached to, by saving it in a variable with a different name
        });

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city); //works - ES6 Arrow functions don't bind in their own this value, they just use the this value of the context they where created in (the outer function, that has a this value bounded to the user object)
        });
    },
    printPlacesLived2: () => { //Never use Arrow functions to define objects' methods: an ES6 Arrow function doesn't bind any this value from the object it gets added onto, it uses the one of its parent scope, which in this case is the global scope, and this is undefined in the global scope
        this.cities.forEach((city) => {
            //console.log(this.name + ' has lived in ' + city); //ERROR the outer function, which is an Arrow function, doesn't have any this value bound from the object, but uses the one of the global scope (undefined)
        });
    },
    printPlacesLived3() { //ES6 syntax for method definition: it is equivalent to an ES5 anonymous function - we have the first this binding from the object, and then inside we have to use ES6 Arrow functions or ES5 functions (anonymous or not) with that workaround
        console.log(this.name);
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });

        return this.cities.map((city) => this.name + ' has lived in ' + city); //ES6 map returns a new array with the elements of the former array transformed by the function passed as an argument
    }
};

console.log(user.printPlacesLived3());



//ex
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());