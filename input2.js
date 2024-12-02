"use strict";

const prompt = require('prompt-sync')({ sigint: true});

let name = prompt("Enter your name : ");
console.log(`Hello ${name}`)