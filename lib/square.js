const Piece = require('./piece');
const board = require('./board');

function Square(color, x, y, width, height, context, board) {
  this.piece = null;
  this.color = color;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
  this.board = board;
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

module.exports = Square;
