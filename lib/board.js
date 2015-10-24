const Square = require('./square');

var canvasElement = document.getElementById('game');

function Board() {
    this.game = null;
    this.squares = [];
    this.squareSize = 50;
    this.squaresPerRow = 8;
    this.canvasElement = canvasElement;
}

module.exports = Board;
































//Board.prototype.createBoard = function() {
//    for (var y = 0; y < this.squareSize * this.numberOfSquares; y += this.squareSize) {
//        for (var x = 0; x < this.squareSize * this.numberOfSquares; x += this.squareSize) {
//            this.squares.push(new Square(x, y, this.squareSize, this.squareSize, this));
//        }
//    }
//
//    return this;
//};
//

