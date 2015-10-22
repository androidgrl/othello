function Piece(color, square) {
  this.color = color;
  this.square = square;
}

Piece.prototype.draw = function(context) {
  context.beginPath();
  context.arc(this.square.x + this.square.width / 2, this.square.y + this.square.width / 2, this.square.width / 2 - 3, 0, Math.PI * 2, true);
  context.fillStyle = this.color;
  context.fill();
  return this;
};

function placePiece(color, square) {
  square.piece = new Piece(player.color)
}

module.exports = Piece;
