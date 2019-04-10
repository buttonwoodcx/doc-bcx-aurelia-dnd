import {snapToEdge} from '../../../src/examples/e8-move-and-resize-plus-snap/snap-to-edge';

describe('snapToEdge', () => {
  it('moves to container edge', () => {
    expect(snapToEdge(
      {x: 8, y: 15, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}}
    )).toEqual({x: 0, y: 15, width: 23, height: 13});

    expect(snapToEdge(
      {x: 80, y: 9, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}}
    )).toEqual({x: 77, y: 0, width: 23, height: 13});

    expect(snapToEdge(
      {x: 20, y: 80, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}}
    )).toEqual({x: 20, y: 87, width: 23, height: 13});
  });

  it('moves to neighour edge', () => {
    expect(snapToEdge(
      {x: 15, y: 15, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ]}
    )).toEqual({x: 15, y: 15, width: 15, height: 15}); // not near

    expect(snapToEdge(
      {x: 35, y: 15, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ]}
    )).toEqual({x: 35, y: 25, width: 15, height: 15});

    expect(snapToEdge(
      {x: 35, y: 70, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ]}
    )).toEqual({x: 35, y: 60, width: 15, height: 15});

    expect(snapToEdge(
      {x: 15, y: 35, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ]}
    )).toEqual({x: 25, y: 35, width: 15, height: 15});

    expect(snapToEdge(
      {x: 70, y: 35, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ]}
    )).toEqual({x: 60, y: 35, width: 15, height: 15});
  });

  it('resizes to container edge', () => {
    expect(snapToEdge(
      {x: 8, y: 9, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}, resize: 'n'}
    )).toEqual({x: 8, y: 0, width: 23, height: 22});

    expect(snapToEdge(
      {x: 8, y: 9, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}, resize: 'w'}
    )).toEqual({x: 0, y: 9, width: 31, height: 13});


    expect(snapToEdge(
      {x: 80, y: 80, width: 23, height: 13},
      {container: {x: 0, y: 0, width: 100, height: 100}, resize: 'se'}
    )).toEqual({x: 80, y: 80, width: 20, height: 20});
  });

  it('resizes to neighour edge', () => {
    expect(snapToEdge(
      {x: 15, y: 15, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ],
       resize: 'se'}
    )).toEqual({x: 15, y: 15, width: 15, height: 15}); // not near

    expect(snapToEdge(
      {x: 35, y: 15, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ],
       resize: 'se'}
    )).toEqual({x: 35, y: 15, width: 15, height: 25});

    expect(snapToEdge(
      {x: 35, y: 70, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ],
       resize: 'nw'}
    )).toEqual({x: 35, y: 60, width: 15, height: 25});

    expect(snapToEdge(
      {x: 15, y: 35, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ],
       resize: 'e'}
    )).toEqual({x: 15, y: 35, width: 25, height: 15});

    expect(snapToEdge(
      {x: 70, y: 35, width: 15, height: 15},
      {container: {x: 0, y: 0, width: 100, height: 100},
       neighbourPositions: [
        {x: 40, y: 40, width: 20, height: 20}
       ],
       resize: 'w'}
    )).toEqual({x: 60, y: 35, width: 25, height: 15});
  });
});
