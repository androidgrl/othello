function Canvas(element) {
    this.element = element;
    this.element.addEventListener('click', this.update.bind(this), false);
}

Canvas.prototype.update = function (event) {
    var pos = this.getMousePos(event);
    var posx = pos.x;
    var posy = pos.y;

    game.respondToClick(posx, posy);
    renderBoard(board, canvas);
};

Canvas.prototype.getMousePos = function (evt) {
    var rect = this.element.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

module.exports = getMousePos;
