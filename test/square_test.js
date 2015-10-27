const Square = require('../lib/square');
const Board = require('../lib/board');
const assert = require('assert');

describe('Square', function () {
    it('exists', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, board, 0);

        assert(square);
    });

    it('instantiates with a size, x, y, board, and index', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, board, 0);
        assert.equal(square.size, 50);
        assert.equal(square.x, 0);
        assert.equal(square.y, 5);
        assert.equal(square.board, board);
        assert.equal(square.index, 0);
    });

    it('instantiates with a default piece property of null', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, board, 0);
        assert.equal(square.piece, null);
    });

    it('instantiates with a default color property of green', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, board, 0);
        assert.equal(square.color, 'green');
    });

    it('can find its neighbors', function () {
        var board = new Board();
        board.createBoard();
        var square = board.squares[0];
        assert.deepEqual([null, null, 1, 9, 8, null, null, null], square.getNeighbors());
    });

    it('can find the next north square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var northSquare = square.findNorth();
        assert.equal(northSquare.index, 2);
    });

    it('can find the next northwest square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var northWestSquare = square.findNorthWest();
        assert.equal(northWestSquare.index, 1);
    });

    it('can find the next west square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findWest();
        assert.equal(westSquare.index, 9);
    });

    it('can find the next southwest square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findSouthWest();
        assert.equal(westSquare.index, 17);
    });

    it('can find the next south square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findSouth();
        assert.equal(westSquare.index, 18);
    });

    it('can find the next southeast square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findSouthEast();
        assert.equal(westSquare.index, 19);
    });

    it('can find the next east square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findEast();
        assert.equal(westSquare.index, 11);
    });

    it('can find the next northeast square', function() {
        var board = new Board();
        board.createBoard();
        var square = board.squares[10];
        var westSquare = square.findNorthEast();
        assert.equal(westSquare.index, 3);
    });

    describe('flippablePaths', function() {
        it('returns empty array when no flippable paths first scenario', function() {
            var board = new Board();
            board.createBoard();

            assert.deepEqual([], board.squares[9].flippablePaths());
        });

        it('returns empty array when no flippable paths second scenario', function() {
            var board = new Board();
            board.createBoard();

            assert.deepEqual([], board.squares[9].flippablePaths());
        });

    });
});



