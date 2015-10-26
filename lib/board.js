const Square = require('./square');
const renderBoard = require('./render');

var canvasElement = document.getElementById('game');

function Board() {
    this.game = null;
    this.squares = [];
    this.squareSize = 50;
    this.squaresPerRow = 8;
    this.canvasElement = canvasElement;
}

Board.prototype.createBoard = function() {
    for (var y = 0; y < this.squareSize * this.squaresPerRow; y += this.squareSize) {
        for (var x = 0; x < this.squareSize * this.squaresPerRow; x += this.squareSize) {
            this.squares.push(new Square(x, y, this.squareSize, this, this.squares.length));
        }
    }
    return this;
};

Board.prototype.placeFirstFourPieces = function() {
    var square0 = this.squares[27];
    var square1 = this.squares[28];
    var square2 = this.squares[36];
    var square3 = this.squares[35];

    var squares = [square0, square1, square2, square3];

    squares.forEach(function(square, index){
        if (index % 2 === 0){
            square.placePiece(this.game.players[0].color);
        } else {
            square.placePiece(this.game.players[1].color);
        }
    }.bind(this));
};

Board.prototype.findValidSquares = function() {
    var emptySquares = this.squares.filter(function(square){
        return square.piece === null;
    });

    var haveNeighborWithPieceOfOppositeColor = emptySquares.filter(function(square){
        return square.hasNeighborWithPiece();
    });

    //var squaresWithFlippableNeighbors = haveNeighborWithPieceOfOppositeColor.filter(function(square){
        //return square.hasFlippableNeighbor();
    //});

    //return squaresWithFlippableNeighbors;
    return haveNeighborWithPieceOfOppositeColor;
};

module.exports = Board;
