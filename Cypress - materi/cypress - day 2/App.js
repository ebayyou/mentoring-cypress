// ! mentoring day 2

// statement
const day = "Tuesday";

if (day === "Monday") {
  console.log("it's monday");
}

if (day === "Monday") {
  console.log("it's monday");
} else {
  console.log("other than monday");
}

if (day === "Monday") {
  console.log("it's monday");
} else if (day === "Tuesday") {
  console.log("it's Tuesday");
} else if (day === "Wednesday") {
  console.log("it's Wednesday");
} else if (day === "Thursday") {
  console.log("it's Thursday");
} else if (day === "Friday") {
  console.log("it's Friday");
} else {
  console.log("it's Saturday");
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
