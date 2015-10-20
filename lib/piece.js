function Piece(color, square, context) {
  this.color = color;
  this.square = square;
  this.context = context;
}

Piece.prototype.draw = function() {
  this.context.beginPath();
  this.context.arc(this.square.x + this.square.width / 2, this.square.y + this.square.width / 2, this.square.width / 2 - 3, 0, Math.PI * 2, true);
  this.context.fillStyle = this.color;
  this.context.fill();
  return this;
};

module.exports = Piece;
