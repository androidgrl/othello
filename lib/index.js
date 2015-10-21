const $ = require('jquery');
const Board = require('./board');
const Piece = require('./piece');
const Game = require('./game');
const Player = require('./player');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var board = new Board(context);
board.createBoard();

var player1 = new Player("Jamie", "black");
var player2 = new Player("Dave", "white");
var players = [player1, player2];

var game = new Game(players, board);
game.start();

module.exports = board;
module.exports = game;
