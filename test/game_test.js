const Board = require('../lib/board');
const Player = require('../lib/player');
const Game = require('../lib/game');
const Piece = require('../lib/piece');
const Square = require('../lib/square');
const assert = require('assert');

describe('Game', function() {
    it('should instantiate with players, turn, winner, over and board properties', function() {
        var board = new Board;
        var player1 = new Player('Dave', 'Black');
        var player2 = new Player('Jamie', 'White');
        var game = new Game([player1, player2], board);

        assert.equal(game.players[0].name, 'Dave');
        assert.equal(game.players[0].color, 'Black');
        assert.equal(game.players[1].name, 'Jamie');
        assert.equal(game.turn, 0);
        assert.equal(game.winner, null);
        assert.equal(game.over, false);
        assert(game.board);
    });

    it('should place a piece on the square that is clicked on', function() {
        var board = new Board;
        var player1 = new Player('Dave', 'Black');
        var player2 = new Player('Jamie', 'White');
        var game = new Game([player1, player2], board);
        var square = new Square(0, 0, 50, 50, board);
        board.squares.push(square);
        game.respondToClick(10,20);

        assert(square.piece);
    });

    it('increases the turn count with each click', function() {
        var board = new Board;
        var player1 = new Player('Dave', 'Black');
        var player2 = new Player('Jamie', 'White');
        var game = new Game([player1, player2], board);
        var square = new Square(0, 0, 50, 50, board);
        board.squares.push(square);

        game.respondToClick(10,20);
        assert.equal(game.turn, 1);
        game.respondToClick(10,20);
        assert.equal(game.turn, 2);
        game.respondToClick(10,20);
        assert.equal(game.turn, 3);
    });

    it('alternates between black and white pieces for each turn', function() {
        var board = new Board;
        var player1 = new Player('Dave', 'Black');
        var player2 = new Player('Jamie', 'White');
        var game = new Game([player1, player2], board);
        var square1 = new Square(0, 0, 50, 50, board);
        var square2 = new Square(100, 100, 50, 50, board);
        board.squares.push(square1);
        board.squares.push(square2);

        game.respondToClick(10,20);
        assert.equal(square1.piece.color, "white");
        game.respondToClick(110, 110);
        assert.equal(square2.piece.color, "black");
    });
});
