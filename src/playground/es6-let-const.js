var nameVar = 'Andrea'; // redefine and reassign
var nameVar = 'Mike';
nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'Jen'; // only reassign, no redefine
//let nameLet = 'Julie'; ERROR
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // no redefine, no reassign
//const nameConst = 'Gunther'; ERROR
//nameConst = 'Gunther'; ERROR
console.log('nameConst', nameConst);

//var is function scoped (if the var is defined inside of an if statement, the same var can be used outside because if is not a function)
//let and const are block scoped (they only exist in the scope of a block {} - functions, if, loops, etc...)

//always use const when defining variables
//only change const to let when there is a need for reassigning the variable (defensive programming)
//never use var