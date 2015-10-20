const Board = require('./board');
const Piece = require('./piece');
const Game = require('./game');

var board = new Board();
board.createBoard();

var game = new Game(["Jamie", "Dave"], board);
game.start();

module.exports = board;
module.exports = game;
