function renderBoard (board, canvas) {
    var context = canvas.getContext('2d');
    board.squares.forEach(function(square) {
        square.draw(context);
        if (square.piece) {
            square.piece.draw(context);
        }
    });
}

module.exports = renderBoard;
