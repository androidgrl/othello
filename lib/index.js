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

var canvasElement = document.getElementById('game');
canvasElement.addEventListener('click', update, false);

function update(event) {
    console.log(event);
    var pos = getMousePos(canvasElement, event);
    var posx = pos.x;
    var posy = pos.y;
    board.respondToClick(posx, posy);
    board.renderBoard(canvasElement);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

module.exports = update;

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
