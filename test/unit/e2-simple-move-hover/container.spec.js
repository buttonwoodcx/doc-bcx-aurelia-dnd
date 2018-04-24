import {Container} from '../../../src/examples/e2-simple-move-hover/container';
import {EventAggregator} from 'aurelia-event-aggregator';

const ea = new EventAggregator();

const dndService = {
  addSource: () => 1,
  removeSource: () => 1,
  addTarget: (delegate) => {delegate.dnd = {};},
  removeTarget: () => 1
};

function dndTestSessionStart(model, target) {
  ea.publish('dnd:willStart');
  dndService.isProcessing = true;
  dndService.model = model;

  const canDrop = target.dndCanDrop(model);
  if (!target.dnd) target.dnd = {};

  target.dnd.isProcessing = true;
  target.dnd.model = model;
  target.dnd.canDrop = canDrop;

  if (canDrop) {
    target.isHovering = false;
    target.isHoveringShallowly = false;
  }
  ea.publish('dnd:didStart');
}

function dndTestSessionHover(target, location, options = {}) {
  target.isHovering = true;
  target.isHoveringShallowly = ('isHoveringShallowly' in options) ?
    options.isHoveringShallowly :
    true; // by default simulate shallow hover
  if (target.dndHover) {
    target.dndHover(location);
  }
}

/* eslint no-unused-vars: 0 */
function dndTestSessionLeave(target) {
  target.isHovering = false;
  target.isHoveringShallowly = false;
}

function dndTestSessionEndWithDropInside(target, location, options = {}) {
  target.isHovering = true;
  target.isHoveringShallowly = ('isHoveringShallowly' in options) ?
    options.isHoveringShallowly :
    true; // by default simulate shallow hover

  ea.publish('dnd:willEnd');

  target.dndDrop(location);

  dndService.isProcessing = undefined;
  dndService.model = undefined;

  target.dnd.isProcessing = undefined;
  target.dnd.model = undefined;
  target.dnd.canDrop = undefined;
  target.dnd.isHovering = undefined;
  target.dnd.isHoveringShallowly = undefined;
  ea.publish('dnd:didEnd');
}

function dndTestSessionEndWithDropOutside(target) {
  ea.publish('dnd:willEnd');
  dndService.isProcessing = undefined;
  dndService.model = undefined;

  target.dnd.isProcessing = undefined;
  target.dnd.model = undefined;
  target.dnd.canDrop = undefined;
  target.dnd.isHovering = undefined;
  target.dnd.isHoveringShallowly = undefined;
  ea.publish('dnd:didEnd');
}

describe('Container', () => {
  it('dndCanDrop', () => {
    const container = new Container(dndService, ea);
    container.attached();
    expect(container.dndCanDrop({type: 'moveItem'})).toBeTruthy();
    expect(container.dndCanDrop({type: 'unknownType'})).toBeFalsy();
  });

  it('drag and drop', () => {
    const container = new Container(dndService, ea);
    container.attached();

    dndTestSessionStart({type: 'moveItem', id: 'a'}, container);

    expect(container.intention).toBeFalsy();
    expect(container.patchedItems).toBe(container.items);

    const location = {
      previewElementRect: {x: 100, y: 70}, // only mock x,y. width and height aren't used
      targetElementRect: {x: 0, y: 0}
    };
    dndTestSessionHover(container, location);

    expect(container.intention).toEqual({id: 'a', x: 100, y: 70});
    expect(container.patchedItems).toEqual([
      {id: 'b', name: 'B', x: 50, y: 200},
      {id: 'c', name: 'C', x: 200, y: 100},
      {id: 'a', name: 'A', x: 100, y: 70}
    ]);

    dndTestSessionEndWithDropInside(container, location);
    expect(container.intention, 'reset intention').toBeFalsy();
    expect(container.items).toEqual([
      {id: 'b', name: 'B', x: 50, y: 200},
      {id: 'c', name: 'C', x: 200, y: 100},
      {id: 'a', name: 'A', x: 100, y: 70}
    ]);
    expect(container.patchedItems).toBe(container.items);
  });

  it('drag but no valid drop', () => {
    const container = new Container(dndService, ea);
    container.attached();

    dndTestSessionStart({type: 'moveItem', id: 'a'}, container);

    const location = {
      previewElementRect: {x: 100, y: 70}, // only mock x,y. width and height aren't used
      targetElementRect: {x: 0, y: 0}
    };
    dndTestSessionHover(container, location); // touched intention
    dndTestSessionEndWithDropOutside(container); // give up intention

    expect(container.intention).toBeFalsy();
    expect(container.items).toEqual([
      {id: 'a', name: 'A', x: 20, y: 20},
      {id: 'b', name: 'B', x: 50, y: 200},
      {id: 'c', name: 'C', x: 200, y: 100}
    ]);
    expect(container.patchedItems).toBe(container.items);
  });
});
