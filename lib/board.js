const Square = require('./square');

function Board() {
    this.squares = [];
    this.size = 50;
    this.numberOfSquares = 8;
}

Board.prototype.createBoard = function() {
    for (var y = 0; y < this.size * this.numberOfSquares; y += this.size) {
        for (var x = 0; x < this.size * this.numberOfSquares; x += this.size) {
            this.squares.push(new Square(x, y, this.size, this.size, this));
        }
    }

    //this.squares.forEach(function(square) {
    //square.draw();
    //});

    return this;
}

module.exports = Board;
