var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Square (empty, color, x, y, width, height, canvas, context) {
    this.empty = empty;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.area = [];
    this.canvas = canvas;
    this.context = context;
}

Square.prototype.draw = function () {
    this.context.fillStyle = 'black';
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x+5, this.y+5, this.width-10, this.height-10);
    return this;
};

var squares = [];

var size = 50;
var numberOfSquares = 8;

for(var y = 0; y < size*numberOfSquares; y += size){
    for(var x = 0; x < size*numberOfSquares; x += size) {
        squares.push(new Square(false, "green", x, y, size, size, canvas, context));
    }
}

squares.forEach(function(square){
    square.draw();
});

var square = squares[27];
context.clearRect(square.x+5, square.y+5, square.width-10, square.height-10);

