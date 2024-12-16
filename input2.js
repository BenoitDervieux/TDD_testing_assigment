// "use strict";

// const prompt = require('prompt-sync')({ sigint: true});


// let number;

// while (Number.isInteger(number) === false) {
//     number = parseInt(prompt("Enter a number : "));
// }
// // let name = prompt("Enter your name : ");
// // console.log(`Hello ${name}`)

// console.log(Number.isInteger(number));


const Suit = require('./src/Suit_types')
const Rank = require('./src/Rank_types')

console.log(Suit[Math.floor(Math.random() * Suit.length)])
console.log(Rank[Math.floor(Math.random() * Rank.length)])