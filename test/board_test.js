const Board = require('../lib/board');
const assert = require('assert');

describe('Board', function () {
    it('should have a default square size of 50 px', function() {
        var board = new Board();
        assert.equal(board.size, 50);
    });

    it('should have a default number of squares in a row', function() {
        var board = new Board();
        assert.equal(board.numberOfSquares, 8);
    });

    it('should have squares', function () {
        var board = new Board();
        assert.deepEqual(board.squares, []);
    });

    it('should have 64 squares', function() {
        var board = new Board();
        board.createBoard();
        assert(board.squares[63]);
        assert.equal(board.squares.length, 64);
    });
});
