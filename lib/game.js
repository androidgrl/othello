const $ = require('jquery');
const Player = require('./player');
const renderBoard = require('./render');

function Game(board) {
    this.board = board;
    this.players = [new Player('player1', 'black'), new Player('player2', 'white')];
    this.currentPlayer = null;
    this.turn = 0;
    this.over = false;
}

Game.prototype.welcome = function() {
    $('#welcome').prepend(`<h1>Welcome to Othello</h1> ${createForm()} ${createStartButton()}`)
    $('#start').on('click', function () {
        var player1 = new Player($('#player1').val(), 'black');
        var player2 = new Player($('#player2').val(), 'white');
        this.players = [player1, player2];
        $('#welcome').html('');
        this.start();
    }.bind(this));
};

Game.prototype.start = function() {
    this.board.createBoard();
    renderBoard(this.board, this.board.canvasElement);
    this.board.placeFirstFourPieces();
};

function createForm(){
    return `<label for="player1">Player1:</label>
        <input type="text" id="player1"></br>
        <label for="player2">Player2:</label>
        <input type="text" id="player2"></br>`;
}

function createStartButton() {
    return `<button id="start">Start Game!</button>`
}

module.exports = Game;
































//Game.prototype.start = function(){
//    welcomePlayers(this.players);
//    placeFirstFourPieces(this);
//};
//
//Game.prototype.respondToClick = function(x, y) {
//    //if (this.turn % 2 === 0) {
//    //$('#turn').prepend(`<h1>${this.players[1].name} turn</h1>`);
//    //} else {
//    //$('#turn').prepend(`<h1>${this.players[0].name} turn</h1>`);
//    //}
//    var selectedSquareArray = this.board.squares.filter(function(square){
//        var xMatch = (x >= square.x) && (x <= square.x + square.width);
//        var yMatch = (y >= square.y) && (y <= square.y + square.width);
//        return xMatch && yMatch;
//    });
//    if (selectedSquareArray[0].piece){
//        console.log('cannot do that');
//    } else {
//        $('#turn').html('');
//        if (this.turn % 2 === 0){
//            $('#turn').prepend(`<h1>${this.players[1].name} turn</h1>`);
//            selectedSquareArray[0].placePiece(this.players[0].color);
//        } else {
//            selectedSquareArray[0].placePiece(this.players[1].color);
//            $('#turn').prepend(`<h1>${this.players[0].name} turn</h1>`);
//        }
//        this.turn ++;
//        console.log(this.turn);
//    }
//};
//
//function placeFirstFourPieces(game) {
//    var square0 = game.board.squares[27];
//    var square1 = game.board.squares[28];
//    var square2 = game.board.squares[36];
//    var square3 = game.board.squares[35];
//
//    var squares = [square0, square1, square2, square3];
//
//    squares.forEach(function(square,index){
//        if (index % 2 == 0){
//            square.placePiece(game.players[0].color);
//        } else {
//            square.placePiece(game.players[1].color);
//        }
//    });
//};
//
//function welcomePlayers(players) {
//    var first = players[0];
//    var second = players[1];
//    $('#title').prepend(`<h1>Welcome ${first.name}(${first.color}) and ${second.name}(${second.color})!</h1>`)
//}
