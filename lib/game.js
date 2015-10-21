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
    welcomePlayers(this.players);
    placeFirstFourPieces(this.board);
};

function placeFirstFourPieces(board) {
    var square0 = board.squares[27];
    var square1 = board.squares[28];
    var square2 = board.squares[35];
    var square3 = board.squares[36];

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
}

function welcomePlayers(players) {
    var first = players[0];
    var second = players[1];
    $('#title').prepend(`<h1>Welcome ${first.name}(${first.color}) and ${second.name}(${second.color})!</h1>`)
}

module.exports = Game;
