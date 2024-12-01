const Player = require('./Player');
const HandStub = require('./HandStub');

class PlayerStub extends Player {
    handStub;
    constructor() {
        super();
        this.handStub = new HandStub();
    }

    addCard(card) {
        this.handStub.addCard(card);
        return true;
    }

    getHand() {
        return this.handStub;
    }

    getValue() {
        return this.handStub.getValue();
    }

    // hit() {
    //     const card = new Card();
    //     card.setSuit('Hearts');
    //     card.setRank('Queen');
    //     this.handStub.addCard(card);
    // }
}