const $ = require('jquery');
const Square = require('./square');

var invalidSquareSelector = $('#invalid-square');
var canvasElement = document.getElementById('game');

function Board() {
    this.game = null;
    this.squares = [];
    this.squareSize = 50;
    this.squaresPerRow = 8;
    this.canvasElement = canvasElement;
}

Board.prototype.createSquares = function() {
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

Board.prototype.renderBoard = function(canvasElement) {
    var context = canvasElement.getContext('2d');

    this.squares.forEach(function(square) {
        square.draw(context);
    });

    $('#turn').html('');
    if (this.game.over === false) {
      takeTurns(this);
    } else {
      endGame(this);
    }
};

Board.prototype.respondToClick = function(x, y) {
    var validSquares = this.findValidSquares();
    var validIndexes = validSquares.map(function(square){
        return square.index;
    });
    var check = confirmValidSquares(x, y, this, validIndexes);
    if (check.valid) {
        invalidSquareSelector.empty();
        check.selectedSquareArray[0].placePiece(this.game.currentPlayer.color);
        var flippable = [].concat.apply([], check.selectedSquareArray[0].flippablePaths());
        flippable.forEach(function(square) {
            square.piece.color = this.game.currentPlayer.color;
        }.bind(this));
        this.game.turn++;
        this.game.findCurrentPlayer();
        validSquares = this.findValidSquares();
        checkForGameOver(this, validSquares);
    } else {
        invalidSquareSelector.empty();
        invalidSquareSelector.append(`<h1> Invalid Square, please try again. </h1>`);
    }
    this.renderBoard(canvasElement);
};

Board.prototype.findValidSquares = function() {
    var emptySquares = this.squares.filter(function(square){
        return square.piece === null;
    });

    var playableSquares = emptySquares.filter(function(square){
        return square.isPlayable();
    });
    return playableSquares;
};

function confirmValidSquares(x, y, board, indexes) {
    var selectedSquareArray = board.squares.filter(function(square) {
        var xMatch = (x >= square.x) && (x <= square.x + square.size);
        var yMatch = (y >= square.y) && (y <= square.y + square.size);
        return xMatch && yMatch;
    });
    var valid = false;
    for (var i = 0; i < indexes.length; i++) {
        if (indexes[i] === selectedSquareArray[0].index) {
            valid = true;
        }
    }
    return {
        valid: valid,
        selectedSquareArray: selectedSquareArray
    };
}

function checkForGameOver(board, squares) {
    if (squares.length === 0) {
        board.game.turn++;
        board.game.findCurrentPlayer();
        squares = board.findValidSquares();
        if (squares.length === 0) {
            board.renderBoard(canvasElement);
            board.game.over = true;
        }
    }
}

function takeTurns(board) {
    if (board.game.turn % 2 === 0) {
        $('#turn').append(`<h1> ${board.game.players[0].name}'s turn (${board.game.players[0].color})</h1>`);
    } else {
        $('#turn').append(`<h1> ${board.game.players[1].name}'s turn (${board.game.players[1].color})</h1>`);
    }
}

function endGame(board) {
    tallyScores(board);
    announceWinner(board);
    askToPlayAgain(board);
}

function tallyScores(board) {
    board.game.blackPieces = board.squares.filter(function(square) {
        if (square.piece) {
            return square.piece.color == 'black'
        }
    });
    board.game.whitePieces = board.squares.filter(function(square) {
        if (square.piece) {
            return square.piece.color == 'white'
        }
    });
}

function announceWinner(board) {
    var numberOfBlackPieces = board.game.blackPieces.length;
    var numberOfWhitePieces = board.game.whitePieces.length;
    if (numberOfBlackPieces > numberOfWhitePieces) {
      $('#turn').append(`<h1> ${board.game.players[0].name} wins with a score of ${numberOfBlackPieces}! </h1>`);
    } else {
      $('#turn').append(`<h1> ${board.game.players[1].name} wins with a score of ${numberOfWhitePieces}! </h1>`);
    }
}

function askToPlayAgain(board) {
    $('#turn').prepend(`<button class="button" id="play-again">Play Again</button>`);
    $('#play-again').on('click', board.clearBoard);
}

Board.prototype.clearBoard = function () {
    location.reload();
};

module.exports = Board;
