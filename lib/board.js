const Square = require('./square');

function Board() {
    this.squares = [];
    this.squareSize = 50;
    this.numberOfSquares = 8;
}

Board.prototype.createBoard = function() {
    for (var y = 0; y < this.squareSize * this.numberOfSquares; y += this.squareSize) {
        for (var x = 0; x < this.squareSize * this.numberOfSquares; x += this.squareSize) {
            this.squares.push(new Square(x, y, this.squareSize, this.squareSize, this));
        }
    }

    return this;
};

module.exports = Board;
