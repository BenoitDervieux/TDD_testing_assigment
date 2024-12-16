const Game = require('./Game');
class GameStub extends Game {
    constructor(dealer) {
        super(dealer);
    }
    getPlayers() {
        return this._players;
    }
}

module.exports = GameStub;