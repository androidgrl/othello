function renderBoard (board, canvasElement) {
    var context = canvasElement.getContext('2d');
    board.squares.forEach(function(square) {
        square.draw(context);
    });
}

module.exports = renderBoard;
