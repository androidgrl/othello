const Board = require('../lib/board');
const assert = require('assert');

describe('Board', function () {
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
