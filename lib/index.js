
const sayHello = () => console.log('What up?');
const gamesAreFun = require('./game.js');

sayHello();
gamesAreFun();

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
    this.context.fillRect(this.x+5, this.y+5, this.width-10, this.height-10);
    return this;
};

var squares = [];

for(var i = 0; i < 800; i += 50) {
   squares.push(new Square(false, "green", i, i, 50, 50, canvas, context));
}
squares.forEach(function(square){
   square.draw();
});

