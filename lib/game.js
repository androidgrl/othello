const $ = require('jquery');
const Player = require('./player');

function Game(board) {
    this.board = board;
    this.players = [new Player('player1', 'black'), new Player('player2', 'white')];
    this.turn = 0;
    this.currentPlayer = this.findCurrentPlayer();
    this.over = false;
    this.counter = 0;
}

Game.prototype.welcome = function() {
    $('#welcome').prepend(`<h1>Welcome to Othello</h1> ${createForm()} ${createStartButton()}
            <p>A move is made by placing a disc of the player's color on the board in a position that "out-flanks" one or more of the opponent's discs.</p>
            </p>A disc or row of discs is outflanked when it is surrounded at the ends by discs of the opposite color.</p>
            <p>A disc may outflank any number of discs in one or more rows in any direction (horizontal, vertical, diagonal).</p>
            <h3>The goal is to get the majority of colour discs on the board at the end of the game.</h3>`)
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
};


Game.prototype.findCurrentPlayer = function() {
    this.currentPlayer = this.players[this.turn % 2];
    return this.currentPlayer;
};

function createForm(){
    return `<div id="box1"><label for="player1">Player1:</label>
        <input type="text" id="player1"></br></div>
        <div id="box2"><label for="player2">Player2:</label>
        <input type="text" id="player2"></br></div>`;
}

function createStartButton() {
    return `<div class="button"><button id="start">Start Game!</button></div>`;
}

module.exports = Game;
