const Player = require('./player');

function createPlayers() {
    var player1 = new Player("Jamie", "black");
    var player2 = new Player("Dave", "white");
    var players = [player1, player2];
    return players;
}

module.exports = createPlayers;
