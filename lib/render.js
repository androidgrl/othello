function renderBoard (board, canvasElement) {
    var canvas = canvasElement.getContext('2d');
    board.squares.forEach(function(square) {
        square.draw(canvas);
    });
}

module.exports = renderBoard;
