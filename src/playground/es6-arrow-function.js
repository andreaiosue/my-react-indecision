const square = function(x) { //ES5 Anonymous function (it doesn't have a name, it is assigned to a variable and called by the variable's name)
    return x * x;
}

console.log(square(2));

function square2(x) { //ES5 Named function (it has its own name, it is not assigned to a variable, it is called by its own name)
    return x * x;
}

console.log(square2(3));

const squareArrow = (x) => { //ES6 Arrow functions are always anonymous (they must be assigned to a variable)
    return x * x;
}

console.log(squareArrow(7));

const squareArrow2 = (x) => x * x; //ES6 Arrow functions have a shorter syntax for one-line bodies

console.log(squareArrow(8));



//ex
const fullName = 'Mike Smith';

const getFirstName = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstName(fullName));

const getFirstName2 = (name) => name.split(' ')[0];

console.log(getFirstName2(fullName));