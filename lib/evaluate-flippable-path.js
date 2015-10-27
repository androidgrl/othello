function evaluateFlippablePath(head, direction) {
    var path = [];
    path.push(head);
    var nextSquare = this.board.squares[head.squareInDirection(direction)];
    while (true) {
        if (nextSquare === undefined ||  nextSquare.piece === null)  {
            path = [];
            break;
        } else if (nextSquare.piece.color === head.piece.color){
            path.push(nextSquare);
        } else {
            break;
        }
        nextSquare = this.board.squares[nextSquare.squareInDirection(direction)];
    }
    return path;
}

module.exports = evaluateFlippablePath;
