import {Box} from '../../../src/examples/e2-simple-move-hover/box';

const dndService = {
  addSource: () => 1,
  removeSource: () => 1
};

const item = {id: 'a', name: 'A', x: 12, y: 23};

const box = new Box(dndService);
box.item = item;

describe('Box', () => {
  it('dndModel()', () => {
    expect(box.dndModel()).toEqual({
      type: 'moveItem',
      id: item.id
    });
  });

  it('positionCss', () => {
    expect(box.positionCss).toEqual({left: '12px', top: '23px'});
  });
});
