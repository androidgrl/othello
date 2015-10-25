const Piece = require('./piece');
const board = require('./board');

function Square(x, y, size, board) {
    this.piece = null;
    this.color = "green";
    this.x = x;
    this.y = y;
    this.size = size;
    this.board = board;
}

Square.prototype.draw = function(context) {
    context.fillStyle = 'black';
    context.fillRect(this.x, this.y, this.size, this.size);
    context.fillStyle = this.color;
    context.fillRect(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
    if (this.piece) {
      this.piece.draw(context);
    }
    return this;
};

Square.prototype.placePiece = function(color) {
    this.piece = new Piece(color, this);
};

module.exports = Square;
