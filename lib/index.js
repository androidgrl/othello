const Board = require('./board');
const Game = require('./game');
const renderBoard = require('./render');
const createPlayers = require('./players');
const getMousePos = require('./canvas.js');
//event for update only available in this file? or not refactored?
//is there a way to pass canvas into a file?

//function update(event) {
    //var pos = getMousePos(canvas, event);
    //var posx = pos.x;
    //var posy = pos.y;

    //game.respondToClick(posx, posy);
    //renderBoard(board, canvas);
//}

var board = new Board();
board.createBoard();

var game = new Game(createPlayers(), board);
game.start();
renderBoard(board, canvas);

var canvasElement = document.getElementById('game');
var canvas = new Canvas(canvasElement, board, game);


