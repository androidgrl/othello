function renderBoard (board, canvas) {
    var context = canvas.getContext('2d');
    board.squares.forEach(function(square) {
        square.draw(context);
    });
}

module.exports = renderBoard;
