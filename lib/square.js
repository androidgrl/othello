const evaluateFlippablePath = require('./evaluate-flippable-path');
const Piece = require('./piece');
const board = require('./board');
module.exports = Square;

function Square(x, y, size, board, index) {
    this.piece = null;
    this.color = "green";
    this.x = x;
    this.y = y;
    this.size = size;
    this.board = board;
    this.index = index;
    this.neighbors = this.getNeighbors();
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

Square.prototype.findNorth = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[0];
    return this.board.squares[index];
};

Square.prototype.findNorthWest = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[7];
    return this.board.squares[index];
};

Square.prototype.findWest = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[6];
    return this.board.squares[index];
};

Square.prototype.findSouthWest = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[5];
    return this.board.squares[index];
};

Square.prototype.findSouth = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[4];
    return this.board.squares[index];
};

Square.prototype.findSouthEast = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[3];
    return this.board.squares[index];
};

Square.prototype.findEast = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[2];
    return this.board.squares[index];
};

Square.prototype.findNorthEast = function () {
    var neighbors = this.getNeighbors();
    var index = neighbors[1];
    return this.board.squares[index];
};

Square.prototype.isPlayable = function() {
    return this.flippablePaths().length > 0;
};

Square.prototype.evaluateFlippablePath = evaluateFlippablePath;

Square.prototype.flippablePaths = function() {
    return this.headsOfPotentialFlippablePaths().reduce(function(paths, head){
        var direction = this.directionToFollow(head);
        var path = this.evaluateFlippablePath(head, direction);
        if (path.length > 0) {
            paths.push(path);
        }
        return paths;
    }.bind(this), []);
};

Square.prototype.headsOfPotentialFlippablePaths = function () {
    var indexesOfNeighborSquares = this.neighbors;
    return indexesOfNeighborSquares.reduce(function(heads, index){
        if(index !== null) {
            var neighbor = this.board.squares[index];
            if (neighbor.piece && (neighbor.piece.color !== this.board.game.currentPlayer.color)) {
                heads.push(neighbor);
            }

        }
        return heads;
    }.bind(this), []);
};

Square.prototype.isflippableCandidate = function(square) {
    var indexOfSquare = square.index;
    var indexOfNeighbor = this.index;
    console.log(indexOfSquare, indexOfNeighbor);
    var direction = square.directionToFollow(indexOfSquare, indexOfNeighbor);
    //if (direction === 'southwest') {
    //var nextPiece = this.findSouthWest;
    //while (nextPiece) {
    //if (this.piece.color === this.board.game.currentPlayer.color) {
    //return true;
    //} else if {

    //}

    //}
    //}
    console.log(direction);
    return true;
};

Square.prototype.directionToFollow = function (otherSquare) {
    return otherSquare.index - this.index;
};

Square.prototype.squareInDirection = function (direction) {
    return this.index + direction;
    //return this.neighbors[direction];
};

Square.prototype.placePiece = function(color) {
    this.piece = new Piece(color, this);
};

Square.prototype.getNeighbors = function() {
    var key = this.index;
    var rows = 8,
    offset = rows - 1,
        first_column_array = [0,8,16,24,32,40,48,56],
        last_column_array = [7,15,23,31,39,47,55,63];

    var neighbors = [
        key - offset - 1,     // 0 top middle(north)
        key - offset,         // 1 top right(northeast)
        key + 1,              // 2 right(east)
            key + offset + 2,     // 3 bottom right(southeast)
            key + offset + 1,     // 4 bottom middle(south)
                key + offset,         // 5 bottom left(southwest)
                key - 1,              // 6 left(west)
                    key - offset - 2      // 7 top left(northwest)
    ];

    // Top

    if(key <= rows) {
        neighbors[1] = null;
        neighbors[0] = null;
        neighbors[7] = null;
    }

    // Bottom

    if(key >= ((rows * rows) - rows)) {
        neighbors[5] = null;
        neighbors[4] = null;
        neighbors[3] = null;
    }

    // Left

    if(first_column_array.indexOf(key) != -1 ) {
        neighbors[6] = null;
        neighbors[7] = null;
        neighbors[5] = null;
    }

    // Right

    if(last_column_array.indexOf(key) != -1 ) {
        neighbors[2] = null;
        neighbors[3] = null;
        neighbors[1] = null;
    }

    this.neighbors = neighbors;
    return neighbors;
};
