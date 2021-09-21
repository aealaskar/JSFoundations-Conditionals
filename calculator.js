const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

// //const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);
// if(isNaN(name)) {
//     console.log("NOT nice");
// } else {
//     console.log("nice");
// //}

const num1 = parseInt(prompt("type in the first number "));
const num2 = parseInt(prompt("type in the second number "));
const op = prompt("type in the operation type + - / * ");
const sum = num1 + num2;
const sub = num1 - num2;
const div = num1 / num2;
const mult = num1 * num2;

if(isNaN(num1 || num2)) {
    console.log("please enter numbers only");
} if (op === '+') {
    console.log(`the result is ${sum}`);
} if (op === '-') {
    console.log(`the result is ${sub}`);
} if (op === '/') {
    console.log(`the result is ${div}`);
} if (op === '*') {
    console.log(`the result is ${mult}`);
} else {
    console.log("please choose what operation to perform + - / * ");
}
    