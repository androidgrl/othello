const Piece = require('./piece');
const board = require('./board');
module.exports = Square;

function Square(x, y, size, board) {
    this.piece = null;
    this.color = "green";
    this.x = x;
    this.y = y;
    this.size = size;
    this.board = board;
    //this.index = index;
    this.neighbors = [];
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

Square.prototype.getNeighbors() {
    var key = this.index;
    var rows = 8,
    offset = rows - 1,
        first_column_array = [0,8,16,24,32,40,48,56],
        last_column_array = [7,15,23,31,39,47,55,63];

    var neighbors = [
        key + 1,               // 0 right
        key - 1,                // 1 left
        key + offset,         // 2 bottom left
        key + offset + 1,   // 3 bottom middle
        key + offset + 2,   // 4 bottom right
        key - offset,          // 5 top right
        key - offset - 1,     // 6 top middle
        key - offset - 2      // 7 top left
    ];

    // Top

    if(key <= rows) {
        neighbors[5] = null;
        neighbors[6] = null;
        neighbors[7] = null;
    }

    // Bottom

    if(key > ((rows * rows) - rows)) {
        neighbors[2] = null;
        neighbors[3] = null;
        neighbors[4] = null;
    }

    // Left

    if( first_column_array.indexOf(key) != -1 ) {
        neighbors[1] = null;
        neighbors[7] = null;
        neighbors[2] = null;
    }

    // Right

    if( last_column_array.indexOf(key) != -1 ) {
        neighbors[0] = null;
        neighbors[4] = null;
        neighbors[5] = null;
    }

    this.neighbors = neighbors;
}
