var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Square (empty, color, x, y, width, height, canvas, context) {
    this.empty = empty;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.context = context;
}

Square.prototype.draw = function () {
    this.context.fillStyle = 'black';
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x+1, this.y+1, this.width-2, this.height-2);
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

var square1 = squares[27];
var square2 = squares[36];
//context.clearRect(square1.x+1, square1.y+1, square1.width-2, square1.height-2);
//context.clearRect(square2.x+1, square2.y+1, square2.width-2, square2.height-2);

context.beginPath();
context.arc(square1.x+square1.width/2, square1.y+square1.width/2, square1.width/2 - 3, 0, Math.PI * 2, true);
context.fillStyle = 'white';
context.fill();
