const Board = require('./board');
const Game = require('./game');
const renderBoard = require('./render');
const createPlayers = require('./players');

var canvas = document.getElementById('game');
canvas.addEventListener('click', update, false);

function update(event) {

    var pos = getMousePos(canvas, event);
    var posx = pos.x;
    var posy = pos.y;

    game.respondToClick(posx, posy);
    renderBoard(board, canvas);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var board = new Board();
board.createBoard();

var game = new Game(createPlayers(), board);
game.start();
renderBoard(board, canvas);

module.exports = board;
module.exports = game;
