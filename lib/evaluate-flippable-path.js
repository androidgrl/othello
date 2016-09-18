function evaluateFlippablePath(head, direction) {
    var path = [];
    path.push(head);
    var nextSquare = head.squareInDirection(direction);
    var rows = 8;
    var first_column_array = [0,8,16,24,32,40,48,56];
    var last_column_array = [7,15,23,31,39,47,55,63];
    while (true) {
      if (nextSquare === undefined || nextSquare.piece === null)  {
            path = [];
            break;
        } else if (direction === -1) {
            if (first_column_array.indexOf(head.index) != -1) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === 1) {
            if (last_column_array.indexOf(head.index) != -1) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === -8) {
            if (head.index < rows) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }

        } else if (direction === 8) {
            if (head.index >= ((rows * rows) - rows)) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === -7) {
            if (head.index < rows) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === 7) {
            if (head.index >= ((rows * rows) - rows)) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === -9) {
            if (head.index < rows) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else if (direction === 9) {
            if (head.index >= ((rows * rows) - rows)) {
                path = [];
                break;
            } else {
                if (nextSquare.piece.color === head.piece.color){
                  path.push(nextSquare);
                } else {
                  break;
                }
            }
        } else {
            break;
        }
        nextSquare = nextSquare.squareInDirection(direction);
    }
    return path;
}

module.exports = evaluateFlippablePath;
