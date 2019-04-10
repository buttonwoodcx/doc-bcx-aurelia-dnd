import {snapToGrid} from '../../../src/examples/e8-move-and-resize-plus-snap/snap-to-grid';

describe('snapToGrid', () => {
  it('snaps location, keep size to default grid size 10', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13})).toEqual({x: 10, y: 20, width: 23, height: 13});
  });

  it('snaps location, keep size to customise grid size', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {gridSize: 8})).toEqual({x: 8, y: 16, width: 23, height: 13});
  });

  it('snaps only y, keep ymax when resize north', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'n'})).toEqual({x: 8, y: 20, width: 23, height: 8});
  });

  it('snaps only ymax, keep y when resize south', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 's'})).toEqual({x: 8, y: 15, width: 23, height: 15});
  });

  it('snaps only x, keep xmax when resize west', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'w'})).toEqual({x: 10, y: 15, width: 21, height: 13});
  });

  it('snaps only xmax, keep x when resize east', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'e'})).toEqual({x: 8, y: 15, width: 22, height: 13});
  });

  it('resize north and east', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'ne'})).toEqual({x: 8, y: 20, width: 22, height: 8});
  });

  it('resize north and west', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'nw'})).toEqual({x: 10, y: 20, width: 21, height: 8});
  });

  it('resize south and east', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'se'})).toEqual({x: 8, y: 15, width: 22, height: 15});
  });

  it('resize south and west', () => {
    expect(snapToGrid({x: 8, y: 15, width: 23, height: 13}, {resize: 'sw'})).toEqual({x: 10, y: 15, width: 21, height: 15});
  });
});
