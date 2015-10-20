const Piece = require('./piece');
const board = require('./board');

function Square(color, x, y, width, height, canvas, context) {
  this.piece = null;
  this.color = color;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.canvas = canvas;
  this.context = context;
}

Square.prototype.draw = function() {
  this.context.fillStyle = 'black';
  this.context.fillRect(this.x, this.y, this.width, this.height);
  this.context.fillStyle = this.color;
  this.context.fillRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
  return this;
};

Square.prototype.createPiece = function() {
  this.piece.draw();
};

//var square1 = board.squares[27];
//square1.createPiece();

module.exports = Square;

