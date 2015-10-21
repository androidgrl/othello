const Square = require('./square');

function Board() {
    this.squares = [];
}

Board.prototype.createBoard = function() {
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  var size = 50;
  var numberOfSquares = 8;

  for (var y = 0; y < size * numberOfSquares; y += size) {
    for (var x = 0; x < size * numberOfSquares; x += size) {
      this.squares.push(new Square("green", x, y, size, size, canvas, context, this));
    }
  }

  this.squares.forEach(function(square) {
    square.draw();
  });
}

module.exports = Board;
