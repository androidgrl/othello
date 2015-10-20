const board = require('./board');
const Piece = require('./piece');

function Game(players, board) {
    this.players = players;
    this.turn = 0;
    this.winner = null;
    this.over = false;
    this.board = board;
}

Game.prototype.start = function(){
    var square1 = this.board.squares[27];
    var square2 = this.board.squares[28];
    var square3 = this.board.squares[35];
    var square4 = this.board.squares[36];


    var squares = [square1, square2, square3, square4];

    squares.forEach(function(square){
        square.piece = new Piece('white', square, square.context);
        square.createPiece();
    });
};

module.exports = Game;
