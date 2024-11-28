// const Suit_types = require("../src/Suit_types");
// const Rank_types = require("../src/Rank_types");
// const Card = require("../src/Card")
// const Deck = require("./src/Deck")


function twoDifferentArrays(array1, array2) {
    const size = (array1.length < array2.length) ? array1.length : array2.length;
    let errors = 0;
    for (let i = 0; i < size; i++) {
        if (array1[i] === array2[i]) {
            errors++;
        }
    }
    return Boolean(Math.round(errors/size));
}

const ar1 = [1,2,3,4,5,6,7,8,9]

const ar2 = [1,2,3,4,5,6,7,8,9]

const ar3 = [10,20,30,40,50,60,70,80,90]

const ar4 = [10,2,30,4,50,6,70,8,9]

const ar5 = [10,2,30,4,50,6,70,8,90]

console.log("Supposed to be true " + twoDifferentArrays(ar1, ar2));
console.log("Supposed to be false " + twoDifferentArrays(ar1, ar3));
console.log("Supposed to be true " + twoDifferentArrays(ar1, ar4));
console.log("Supposed to be false " + twoDifferentArrays(ar1, ar5));