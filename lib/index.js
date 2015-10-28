const $ = require('jquery');
const Board = require('./board');
const Game = require('./game');
const renderBoard = require('./render');
const createPlayers = require('./players');

var board = new Board();
var game = new Game(board);
board.game = game;

$(document).ready( function () {
    game.welcome();
});





//
//var board = new Board();
//board.createBoard();
//
//var game = new Game(createPlayers(), board);
//game.start();
//renderBoard(board, canvas);
//
//module.exports = board;
//module.exports = game;
