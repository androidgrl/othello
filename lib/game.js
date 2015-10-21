const $ = require('jquery');
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
    var square0 = this.board.squares[27];
    var square1 = this.board.squares[28];
    var square2 = this.board.squares[35];
    var square3 = this.board.squares[36];

    var squares = [square0, square1, ,square2, square3];

    squares.forEach(function(square,index){
        if (index % 2 == 0){
            square.piece = new Piece('white', square, square.context);
            square.createPiece();
        } else {
            square.piece = new Piece('black', square, square.context);
            square.createPiece();
        }
    });
    welcomePlayers(this.players);
};

function welcomePlayers(players) {
    $('#title').prepend(`<h1>Welcome ${players[0]} and ${players[1]}!</h1>`)
}

module.exports = Game;
