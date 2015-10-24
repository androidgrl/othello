const Square = require('../lib/square');
const Board = require('../lib/board');
const assert = require('assert');

describe('Square', function () {
    xit('exists', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, 50, board);

        assert(square);
    });

    xit('instantiates with a width, height, x, y, and board', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, 50, board);
        assert.equal(square.width, 50);
        assert.equal(square.height, 50);
        assert.equal(square.x, 0);
        assert.equal(square.y, 5);
        assert.equal(square.board, board);
    });

    xit('instantiates with a default piece property of null', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, 50, board);
        assert.equal(square.piece, null);
    });

    xit('instantiates with a default color property of green', function () {
        var board = new Board();
        var square = new Square(0, 5, 50, 50, board);
        assert.equal(square.color, 'green');
    });
});


