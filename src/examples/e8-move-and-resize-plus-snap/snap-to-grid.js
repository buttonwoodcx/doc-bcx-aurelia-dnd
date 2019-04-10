import _ from 'lodash';

function toGrid(number, gridSize) {
  return Math.round(number / gridSize) * gridSize;
}

export function snapToGrid(position, {resize, gridSize = 10} = {}) {
  let {x, y, width, height} = position;

  if (resize) {
    let oldX = x;
    let oldY = y;
    // resize item, only snap the changing edges
    _.each(resize, char => {
      switch (char) {
      case 'n': // north
        y = toGrid(y, gridSize);
        height += oldY - y;
        break;
      case 's': // south
        height = toGrid(height + y, gridSize) - y;
        break;
      case 'w': // west
        x = toGrid(x, gridSize);
        width += oldX - x;
        break;
      case 'e': // east
        width = toGrid(width + x, gridSize) - x;
        break;
      default:
      }
    });
  } else {
    // move item, keep width and height
    x = toGrid(x, gridSize);
    y = toGrid(y, gridSize);
  }

  return {x, y, width, height};
}
