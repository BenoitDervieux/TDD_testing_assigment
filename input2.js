"use strict";

const prompt = require('prompt-sync')({ sigint: true});


let number;

while (Number.isInteger(number) === false) {
    number = parseInt(prompt("Enter a number : "));
}
// let name = prompt("Enter your name : ");
// console.log(`Hello ${name}`)

console.log(Number.isInteger(number));