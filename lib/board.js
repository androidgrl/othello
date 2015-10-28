const $ = require('jquery');
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

    var playableSquares = emptySquares.filter(function(square){
        return square.isPlayable();
    });
    console.log(playableSquares);
    return playableSquares;
};

Board.prototype.playTurn = function() {
    var board = this;
    canvasElement.addEventListener('click', board.update.bind(board, event), false);
};

Board.prototype.renderBoard = function(canvasElement) {
    var context = canvasElement.getContext('2d');
    this.squares.forEach(function(square) {
        square.draw(context);
    });
};

Board.prototype.respondToClick = function(x, y) {
    $('#turn').html('');
    if (this.game.turn % 2 === 0) {
        $('#turn').prepend(`<h1> ${this.game.players[1].name} turn </h1>`);
    } else {
        $('#turn').prepend(`<h1> ${this.game.players[0].name} turn </h1>`);
    }
    var selectedSquareArray = this.squares.filter(function(square) {
        var xMatch = (x >= square.x) && (x <= square.x + square.width);
        var yMatch = (y >= square.y) && (y <= square.y + square.width);
        return xMatch && yMatch;
    });
    var validSquares = this.findValidSquares();
    var validIndexes = validSquares.map(function(square){
        return square.index;
    });
    //var trueOrFalse = validSquares.includes(selectedSquareArray[0]);
        var result = false;
        console.log(selectedSquareArray);
    for(var i = 0; i < validIndexes.length; i++){
        if (validIndexes[i] === selectedSquareArray[0].index) {
            result = true;
        }
    }
    console.log(result);
    this.game.turn++;
};

Board.prototype.update = function (event) {
    //debugger;
    console.log(event);
    var pos = getMousePos(canvasElement, event);
    var posx = pos.x;
    var posy = pos.y;
    console.log(posx, posy);
    this.respondToClick(posx, posy);
    this.renderBoard(canvasElement);
};

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


module.exports = Board;






















//if (selectedSquareArray[0].piece) {
//console.log('cannot do that');
//} else {
//$('#turn').html('');
//if (this.turn % 2 === 0) {
//$('#turn').prepend(`<
//h1 > ${this.players[1].name} turn < / h1 >`)
//;
//selectedSquareArray[0].placePiece(this.players[0].color);
//} else {
//selectedSquareArray[0].placePiece(this.players[1].color);
//$('#turn').prepend(`<
//h1 > ${this.players[0].name} turn < / h1 >`)
//;
//}
//this.turn++;
//}

