const Game = require('./Game');
class GameStub extends Game {
    constructor() {
        super();
    }
    getPlayers() {
        return this._players;
    }
}

module.exports = GameStub;