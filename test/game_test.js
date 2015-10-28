const Board = require('../lib/board');
const Player = require('../lib/player');
const Game = require('../lib/game');
const Piece = require('../lib/piece');
const Square = require('../lib/square');
const assert = require('assert');

describe('Game', function() {
    it('should instantiate with players, turn, over and board properties', function() {
        var board = new Board();
        var game = new Game(board);

        assert.equal(game.players[0].name, 'player1');
        assert.equal(game.players[0].color, 'black');
        assert.equal(game.players[1].name, 'player2');
        assert.equal(game.players[1].color, 'white');
        assert.equal(game.turn, 0);
        assert.equal(game.over, false);
        assert(game.board);
    });

    it('sets the current player according to the turn number', function() {
        var board = new Board();
        var game = new Game(board);
        assert.equal(game.currentPlayer.color, 'black');
        game.turn = 1;
        game.findCurrentPlayer();
        assert.equal(game.currentPlayer.color, 'white');
        game.turn = 2;
        game.findCurrentPlayer();
        assert.equal(game.currentPlayer.color, 'black');

    });

    xit('should place a piece on the square that is clicked on', function() {
        var board = new Board();
        var game = new Game(board);
        board.game = game;
        board.createBoard();
        var square = board.squares[0];
        board.respondToClick(10,20);
        board.validSquares = function() {
            return square;
        };

        assert(square.piece);
    });

    xit('increases the turn count with each click', function() {
        var board = new Board();
        var player1 = new Player('Dave', 'black');
        var player2 = new Player('Jamie', 'white');
        var game = new Game([player1, player2], board);
        var square1 = new Square(0, 0, 50, 50, board);
        var square2 = new Square(100, 100, 50, 50, board);
        board.squares.push(square1);
        board.squares.push(square2);

        game.respondToClick(10,20);
        assert.equal(game.turn, 1);
        game.respondToClick(110,120);
        assert.equal(game.turn, 2);
    });

    xit('alternates between black and white pieces for each turn', function() {
        var board = new Board();
        var player1 = new Player('Dave', 'black');
        var player2 = new Player('Jamie', 'white');
        var game = new Game([player1, player2], board);
        var square1 = new Square(0, 0, 50, 50, board);
        var square2 = new Square(100, 100, 50, 50, board);
        board.squares.push(square1);
        board.squares.push(square2);

        game.respondToClick(10,20);
        assert.equal(square1.piece.color, "black");
        game.respondToClick(110, 110);
        assert.equal(square2.piece.color, "white");
    });

    xit('does not place piece when the square is occupied', function() {
        var board = new Board();
        var player1 = new Player('Dave', 'black');
        var player2 = new Player('Jamie', 'white');
        var game = new Game([player1, player2], board);
        var square1 = new Square(0, 0, 50, 50, board);
        board.squares.push(square1);

        game.respondToClick(10,20);
        assert.equal(square1.piece.color, "black");
        assert.equal(game.turn, 1);
        game.respondToClick(10, 20);
        assert.equal(square1.piece.color, "black");
        assert.equal(game.turn, 1);
    });

    it('knows when it is over', function() {
        var board = new Board();
        var game = new Game(board);
        board.game = game;
        board.createBoard();
        board.squares.forEach(function(square){
            square.placePiece('white');
        });

        assert.equal(true, game.over);
    });
});
