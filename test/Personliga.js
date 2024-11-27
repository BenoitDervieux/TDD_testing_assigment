const Suit_types = require("../src/Suit_types");

for (const element in Suit_types) {
    console.log(Suit_types[element]);
}

function isFromTheSuiteType(suit_given) {
    for (const element in Suit_types) {
        if (suit_given === Suit_types[element]) {
            return true;
        }
    }
    return false;
}

console.log(isFromTheSuiteType('hearts'));