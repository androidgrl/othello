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
    placeFirstFourPieces(this);
};

Game.prototype.respondToClick = function(x, y) {
    var selectedSquareArray = this.board.squares.filter(function(square){
        var xMatch = (x >= square.x) && (x <= square.x + square.width);
        var yMatch = (y >= square.y) && (y <= square.y + square.width);
        return xMatch && yMatch;
    });
    if (selectedSquareArray[0].piece){
        console.log('cannot do that');
    } else {
        if (this.turn % 2 === 0){
            selectedSquareArray[0].placePiece(this.players[0].color);
        } else {
            selectedSquareArray[0].placePiece(this.players[1].color);
        }
        this.turn ++;
        console.log(this.turn);
    }
};

function placeFirstFourPieces(game) {
    var square0 = game.board.squares[27];
    var square1 = game.board.squares[28];
    var square2 = game.board.squares[36];
    var square3 = game.board.squares[35];

    var squares = [square0, square1, square2, square3];

    squares.forEach(function(square,index){
        if (index % 2 == 0){
            square.placePiece(game.players[0].color);
        } else {
            square.placePiece(game.players[1].color);
        }
    });
};

function welcomePlayers(players) {
    var first = players[0];
    var second = players[1];
    $('#title').prepend(`<h1>Welcome ${first.name}(${first.color}) and ${second.name}(${second.color})!</h1>`)
}

module.exports = Game;
