// ! mentoring day 1

// variable
const data = "data";
let dataEmpty = "";
dataEmpty = "lol";

// type data

// ? string
const string = "string";

// ? number
const number = 1;
const decimalNumber = 1.2;

// ? bigInt
const bigInt = 1234567890123456789012345n;
const bigIntFunc = BigInt(1234567890123456789012345n);

// ? boolean
const boolTrue = true;
const boolFalse = false;

// ? Undefined
const not = undefined;

// ? null
const canNull = null;

// JavaScript Operators

// JavaScript Arithmetic Operators
let x;
let y;

// ? plus
x = 100 + 1;

// ? minus
y = 100 - 1;

// ? division
x = 100 / 1;

// ? times
y = 100 * 1;

// ? modulus
x = 100 % 2;

// ? increment
y++;

// ? decrement
x--;

// JavaScript Assignment Operators
let x1 = 1;
let y1 = 2;

// ? assign
x1 = y1;

// ? assign plus
x1 = x1 + y1;

// ? assign min
x1 = x1 - y1;

// ? assign divide
x1 = x1 / y1;

// ? assign multiply
x1 = x1 * y1;

// ? assign modulus
x1 = x1 % y1;

// JavaScript Comparison Operators

// ? equal to
const equalTo = "bayu" == "fadhil";

// ? equal value and equal type
const equalValueAType = "1" === 1;

// ? not equal
const notEqual = "bayu" != "fadhil";

// ? not equal value or not equal type
const notEqualValueAType = "1" !== 1;

// ? greater than
const greaterThan = 1 > 2;

// ? less than
const lessThan = 1 < 2;

// ? greater than or equal to
const greaterThanOrEqualTo = 2 >= 4;

// ? less than or equal to
const lessThanOrEqualTo = 5 <= 2;

// ? ternary operator
const trueOrFalse = true ? "true" : "false";

// JavaScript Logical Operators
// ? 	logical and
const logicalAnd = x < 10 && y > 1;

// ? 	logical or
const logicalOr = x == 5 || y == 5;

// ? 	logical not
const logicalNot = !(x == y);

// ! mentoring day 2

// statement
let value = 6;

if (value > 8) {
  console.log("You passed");
} else if (value >= 5 && value <= 8) {
  console.log("You remedial");
} else {
  console.log("You fail");
}

/*
This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/
const type = "TYPE_2";
switch (type) {
  case "TYPE_1":
    console.log("TYPE_1");
    break;
  case "TYPE_2":
    console.log("TYPE_2");
    break;
  default:
    console.log("TYPE");
    break;
}

// function

// ? Function Declaration
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
function functionDeclaration() {
  console.log("call this function declaration");
}

functionDeclaration();

// ? Function Expression
// A function expression can be stored in a variable:
// After a function expression has been stored in a variable, the variable can be used as a function:
const functionExpression = function (a, b) {
  console.log("call this function expression");
  return a + b;
};

const result = functionExpression(1, 2);
console.log(result);

// ? arrow function
const arrowFunction = () => console.log("call this arrow function");

arrowFunction();

// ? anonymous function
(function () {
  console.log("Hello!!"); // I will invoke myself
})();

// looping
for (let i = 0; i < 10; i++) {
  console.log(i, "some");
}

// array
// An array is a special variable, which can hold more than one value:

const one = 1;
const two = 1;
const three = 1;

// ? create an array
const arrays = [1, 2, 3];

console.log(arrays[0], arrays[1], arrays[2]);

// ? manipulation array
arrays[0] = "Saab";
arrays[1] = "Volvo";
arrays[2] = "BMW";

console.log(arrays[0], arrays[1], arrays[2]);

// ? array method
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// length
let size = fruits.length;

// join
let joinFruits = fruits.join(" * ");

// push
fruits.push("Kiwi");

// pop
fruits.pop();

// shift
fruits.shift();

// pam
fruits.unshift("Lemon");

// merging to array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// splice
// param 1 : start, param 2 end
fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits2, "fruits2 splice");

// slice
const citrus = fruits2.slice(1);
console.log(citrus, "fruits2 slice");

// forEach
const numbers = [65, 44, 12, 4];
numbers.forEach((item, index, arr) => {
  arr[index] = item * 10;
});

console.log(numbers, "number");

// map
const numbers2 = [65, 44, 12, 4];
const newArr = numbers.map((num) => {
  return num * 10;
});

console.log(numbers2, "numbers2");
console.log(newArr, "newArr");

// ? object
// create object
// key : value
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person.lastName);
console.log(person.firstName);
console.log(person.age);
console.log(person.eyeColor);

// manipulation object
person.firstName = "Merge";
person.lastName = "Da";
person.age = 50;
person.eyeColor = "blue";
console.log(person);

// object method
person.skills = function () {
  console.log("can programming");
};
person.skills();

// ? array of object
const employee = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
];

console.log(employee[0].firstName + " " + employee[0].lastName);

employee[0].company = "BTI";
employee[1].company = "BTI";

employee.forEach((person) => {
  person.company = "BTI";
});

const newEmployee = employee.map((person) => {
  person.company = "BTI";

  return person;
});

console.log(employee);
console.log(newEmployee);
