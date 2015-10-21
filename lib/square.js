const Piece = require('./piece');
const board = require('./board');

function Square(x, y, width, height, board) {
  this.piece = null;
  this.color = "green";
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.board = board;
}

Square.prototype.draw = function(context) {
  context.fillStyle = 'black';
  context.fillRect(this.x, this.y, this.width, this.height);
  context.fillStyle = this.color;
  context.fillRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
  return this;
};

Square.prototype.createPiece = function(context) {
    this.piece.draw(context);
};

module.exports = Square;
