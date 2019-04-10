import _ from 'lodash';

function _isOverlapping(n1, size1, n2, size2) {
  return n1 <= n2 + size2 && n2 <= n1 + size1;
}

function isOverlappingOnX(position1, position2) {
  return _isOverlapping(position1.x, position1.width, position2.x, position2.width);
}

function isOverlappingOnY(position1, position2) {
  return _isOverlapping(position1.y, position1.height, position2.y, position2.height);
}

// This edge snap algorithm doesn't avoid box overlap. You would need more code to disable overlap.
export function snapToEdge(position, {resize, container, neighbourPositions, margin = 10}) {
  let {x, y, width, height} = position;

  function near(n1, n2) {
    return Math.abs(n1 - n2) <= margin;
  }

  if (resize) {
    // resize item, only snap the changing edges
    _.each(resize, char => {
      let snapped = false;

      switch (char) {
      case 'n': // north
        // check container
        if (near(y, container.y)) {
          snapped = true;
          height += y - container.y;
          y = container.y;
        }

        // check neighbours
        if (!snapped) {
          // check neighbours
          _.each(neighbourPositions, neighbour => {
            if (isOverlappingOnX(position, neighbour)) {
              if (near(y, neighbour.y + neighbour.height)) {
                snapped = true;
                height += y - neighbour.y - neighbour.height;
                y = neighbour.y + neighbour.height;
              }
            }

            if (snapped) return false; // exit lodash#each by explicitly return false
          });
        }
        break;
      case 's': // south
        // check container
        if (near(y + height, container.y + container.height)) {
          snapped = true;
          height = container.y + container.height - y;
        }

        // check neighbours
        if (!snapped) {
          // check neighbours
          _.each(neighbourPositions, neighbour => {
            if (isOverlappingOnX(position, neighbour)) {
              if (near(y + height, neighbour.y)) {
                height = neighbour.y - y;
              }
            }

            if (snapped) return false; // exit lodash#each by explicitly return false
          });
        }
        break;
      case 'w': // west
        // check container
        if (near(x, container.x)) {
          snapped = true;
          width += x - container.x;
          x = container.x;
        }

        // check neighbours
        if (!snapped) {
          // check neighbours
          _.each(neighbourPositions, neighbour => {
            if (isOverlappingOnY(position, neighbour)) {
              if (near(x, neighbour.x + neighbour.width)) {
                snapped = true;
                width += x - neighbour.x - neighbour.width;
                x = neighbour.x + neighbour.width;
              }
            }

            if (snapped) return false; // exit lodash#each by explicitly return false
          });
        }
        break;
      case 'e': // east
        // check container
        if (near(x + width, container.x + container.width)) {
          snapped = true;
          width = container.x + container.width - x;
        }

        // check neighbours
        if (!snapped) {
          // check neighbours
          _.each(neighbourPositions, neighbour => {
            if (isOverlappingOnY(position, neighbour)) {
              if (near(x + width, neighbour.x)) {
                width = neighbour.x - x;
              }
            }

            if (snapped) return false; // exit lodash#each by explicitly return false
          });
        }
        break;
      default:
      }
    });
  } else {
    // move item, keep width and height
    let xSnapped = false;
    let ySnapped = false;

    // check container
    if (near(x, container.x)) {
      xSnapped = true;
      x = container.x;
    } else if (near(x + width, container.x + container.width)) {
      xSnapped = true;
      x = container.x + container.width - width;
    }

    if (near(y, container.y)) {
      ySnapped = true;
      y = container.y;
    } else if (near(y + height, container.y + container.height)) {
      ySnapped = true;
      y = container.y + container.height - height;
    }

    // check neighbours
    _.each(neighbourPositions, neighbour => {
      if (!xSnapped && isOverlappingOnY(position, neighbour)) {
        if (near(x, neighbour.x + neighbour.width)) {
          xSnapped = true;
          x = neighbour.x + neighbour.width;
        } else if (near(x + width, neighbour.x)) {
          xSnapped = true;
          x = neighbour.x - width;
        }
      }

      if (!ySnapped && isOverlappingOnX(position, neighbour)) {
        if (near(y, neighbour.y + neighbour.height)) {
          ySnapped = true;
          y = neighbour.y + neighbour.height;
        } else if (near(y + height, neighbour.y)) {
          ySnapped = true;
          y = neighbour.y - height;
        }
      }

    });
  }

  return {x, y, width, height};
}
