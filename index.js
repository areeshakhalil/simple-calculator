#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operators === "Addition") {
    console.log(`your value is ${answer.FirstNumber + answer.SecondNumber}`);
}
else if (answer.operators === "Subtraction") {
    console.log(`your value is${answer.FirstNumber - answer.SecondNumber}`);
}
else if (answer.operators === "Multiplication") {
    console.log(`your value is${answer.FirstNumber * answer.SecondNumber}`);
}
else if (answer.operators === "Division") {
    console.log(`your value is${answer.FirstNumber / answer.SecondNumber}`);
}
else {
    console.log("Please select valid operator");
}
