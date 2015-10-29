const $ = require('jquery');
const Player = require('./player');
const renderBoard = require('./render');

function Game(board) {
    this.board = board;
    this.players = [new Player('player1', 'black'), new Player('player2', 'white')];
    this.turn = 0;
    this.currentPlayer = this.findCurrentPlayer();
    this.over = false;
    this.counter = 0;
}

Game.prototype.welcome = function() {
    $('#welcome').prepend(`<h1>Welcome to Othello</h1> ${createForm()} ${createStartButton()}`)
    $('#start').on('click', function () {
        var player1 = new Player($('#player1').val(), 'black');
        var player2 = new Player($('#player2').val(), 'white');
        this.players = [player1, player2];
        $('#welcome').html('');
        this.setup();
    }.bind(this));
};

Game.prototype.setup = function() {
    this.board.createBoard();
    this.board.placeFirstFourPieces();
    this.board.renderBoard(this.board.canvasElement);
    //this.start();
};

//Game.prototype.start = function() {
    //this.findCurrentPlayer();
    //this.board.findValidSquares();
//};

Game.prototype.findCurrentPlayer = function() {
    this.currentPlayer = this.players[this.turn % 2];
    return this.currentPlayer;
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
