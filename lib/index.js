const $ = require('jquery');
const Board = require('./board');
const Piece = require('./piece');
const Game = require('./game');
const Player = require('./player');
const renderBoard = require('./render');

var canvas = document.getElementById('game');
//var context = canvas.getContext('2d');

var board = new Board();
board.createBoard();
renderBoard(board, canvas);

//renderBoard(board, canvas);
//calls drawPiece
//callskjj

var player1 = new Player("Jamie", "black");
var player2 = new Player("Dave", "white");
var players = [player1, player2];

var game = new Game(players, board);
game.start();

module.exports = board;
module.exports = game;
