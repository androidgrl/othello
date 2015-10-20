const Board = require('./board');
const Piece = require('./piece');

var board = new Board();
board.createBoard();
console.log(board.squares[27]);

module.exports = board;

var square1 = board.squares[27];
square1.piece = new Piece('white', square1, square1.context);
square1.createPiece();
