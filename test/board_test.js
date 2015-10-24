const Board = require('../lib/board');
const assert = require('assert');

describe('Board', function () {
    it('should have a default square size of 50 px', function() {
        var board = new Board();
        assert.equal(board.squareSize, 50);
    });

   xit('should have a default number of squares in a row', function() {
        var board = new Board();
        assert.equal(board.numberOfSquares, 8);
    });

   xit('should have squares', function () {
        var board = new Board();
        assert.deepEqual(board.squares, []);
    });

   xit('should have 64 squares', function() {
        var board = new Board();
        board.createBoard();
        assert(board.squares[63]);
        assert.equal(board.squares.length, 64);
    });
});
