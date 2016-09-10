const $ = require('jquery');
const Board = require('./board');
const Game = require('./game');

function start() {
    var board = new Board();
    var game = new Game();
    game.board = board;
    board.game = game;
    game.welcome();

    var canvasElement = document.getElementById('game');
    canvasElement.addEventListener('click', updateBoard, false);

    function updateBoard(event) {
        var pos = getMousePos(canvasElement, event);
        var posx = pos.x;
        var posy = pos.y;
        board.respondToClick(posx, posy);
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

$(document).ready( function () {
    start();
});
