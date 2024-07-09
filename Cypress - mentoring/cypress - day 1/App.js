// variable
// let botolIsi;
// const botol = "air";

// botolIsi = "sirup";

// console.log(botol);
// console.log(botolIsi);

// botolIsi = "kopi";
// console.log(botolIsi);

// type data
const string = "string";
const number = 20;
const decimal = 2.0;
const bigInt = 200000000000000000000000000000000000n;
const benar = true;
const salah = false;
const kosong = undefined;
const cannull = null;

// string manipulation
const firstName = "bayu";
const lastName = "anggoro";

const files = "file.jpg||file.png||file.csv";

// const fullName = firstName + " " + lastName;
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// const split = files.split("||");
// console.log(split);

const name = "bayu";
const capitalizedName = name.charAt(0).toUpperCase();
const remainingWord = name.slice(1);

// console.log(capitalizedName);
// console.log(remainingWord);

// const mergeWord = capitalizedName + remainingWord;

// console.log(mergeWord);

// javascript operators
// javascript arithmetic operator
const x = 20;
const y = 9;

const resultPlus = x + y;
const resultMultiply = x * y;
const resultDivision = x / y;
const resultMinus = x - y;
const resultModulus = x % y;

const result = (x + y) / 4;

// console.log(resultPlus);
// console.log(resultMultiply);
// console.log(resultDivision);
// console.log(resultMinus);
// console.log(result);

// javascript assignment operator
let x1 = 2;
let y1 = 10;

// x1 = x1 + y1;
// x1 = x1 * 5;
// x1 = x1 / y1;
// x1 = x1 - y1;
// x1 = x1 % y1;
// console.log(x1);

// shortcut
x1 += y1;
x1 *= y1;
x1 /= y1;
x1 -= y1;
x1 %= y1;

// console.log(x1);

// javascript comparison operator
const equalTo = "bayu" == "fadhil";
const equalToAType = "20" === 20;
const notEqual = "bayu" != "fadhil";
const notEqualToAType = "20" !== 20;
const graterThan = 50 > 60;
const lessThan = 60 < 20;
const graterThanOrEqualTo = 40 >= 50;
const lessThanOrEqualTo = 40 <= 50;
const ternary = 80 >= 100 ? "You Passed" : "You Fail";

// console.log(equalTo);
// console.log(equalToAType);
// console.log(notEqual);
// console.log(notEqualToAType);
// console.log(lessThan);
// console.log(graterThanOrEqualTo);
// console.log(lessThanOrEqualTo);
// console.log(ternary);

// JavaScript Logical Operators
let x2 = 8;
let y2 = 12;
let bool = false;

const logicalAnd = x2 <= 10 && y2 >= 5;
const logicalOr = x2 <= 20 || y2 >= 100;
const logicalNot = !(x2 === 10);
let logicalNot2 = !bool;

console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);
console.log(logicalNot2);
