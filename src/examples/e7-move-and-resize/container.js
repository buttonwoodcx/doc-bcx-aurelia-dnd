import {inject, computedFrom} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';
import {EventAggregator} from 'aurelia-event-aggregator';
import _ from 'lodash';

const MIN_HEIGHT = 30;
const MIN_WIDTH = 30;

@inject(DndService, EventAggregator)
export class Container {
  showResizeArea = false;

  items = [
    {id: 'a', name: 'A', x: 20, y: 20, width: 80, height: 50},
    {id: 'b', name: 'B', x: 50, y: 200, width: 80, height: 50},
    {id: 'c', name: 'C', x: 200, y: 100, width: 80, height: 50}
  ];

  intention;

  constructor(dndService, ea) {
    this.dndService = dndService;
    this.ea = ea;
  }

  attached() {
    this.dndService.addTarget(this);
    this.subscribers = [
      this.ea.subscribe('dnd:willStart', () => this.resetIntention()),
      this.ea.subscribe('dnd:didEnd', () => this.resetIntention())
    ];
  }

  detached() {
    this.dndService.removeTarget(this);
    this.subscribers.forEach(s => s.dispose());
  }

  dndCanDrop(model) {
    return model.type === 'moveItem' || model.type === 'resizeItem';
  }

  dndDrop() {
    const {items, intention} = this;
    if (!intention) return;

    const idx = _.findIndex(items, {id: intention.id});

    if (idx >= 0) {
      const item = items[idx];
      items.splice(idx, 1);
      // always show current moving item on top
      items.push({
        ...item,
        x: intention.x,
        y: intention.y,
        width: intention.width,
        height: intention.height
      });
    }
  }

  dndHover(location) {
    const {mouseStartAt, mouseEndAt, previewElementRect, targetElementRect} = location;

    const {model} = this.dnd;
    const item = _.find(this.items, {id: model.id});
    if (!item) return;

    if (model.type === 'moveItem') {
      const newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };

      this.intention = {
        id: model.id,
        x: newLoc.x,
        y: newLoc.y,
        width: item.width,
        height: item.height
      };
    } else if (model.type === 'resizeItem') {
      const delta = {
        x: Math.round(mouseEndAt.x - mouseStartAt.x),
        y: Math.round(mouseEndAt.y - mouseStartAt.y)
      };

      const _intention = {
        id: model.id,
        x: item.x,
        y: item.y,
        width: item.width,
        height: item.height
      };

      // when resize is from corner, it's a combination of two chars like "ne"
      _.each(model.resize, char => {
        switch (char) {
        case 'n': // north
          if (delta.y > _intention.height - MIN_HEIGHT) delta.y = _intention.height - MIN_HEIGHT;
          _intention.y += delta.y;
          _intention.height -= delta.y;
          break;
        case 's': // south
          if (delta.y < MIN_HEIGHT - _intention.height) delta.y = MIN_HEIGHT - _intention.height;
          _intention.height += delta.y;
          break;
        case 'w': // west
          if (delta.x > _intention.width - MIN_WIDTH) delta.x = _intention.width - MIN_WIDTH;
          _intention.x += delta.x;
          _intention.width -= delta.x;
          break;
        case 'e': // east
          if (delta.x < MIN_WIDTH - _intention.width) delta.x = MIN_WIDTH - _intention.width;
          _intention.width += delta.x;
          break;
        default:
        }
      });

      this.intention = _intention;
    }
  }

  resetIntention() {
    this.intention = null;
  }

  @computedFrom('items', 'intention')
  get patchedItems() {
    const {items, intention} = this;
    if (!intention) return items;

    let patched = _.reject(items, {id: intention.id});
    const item = _.find(this.items, {id: intention.id});

    if (item) {
      // always show current moving item on top
      patched.push({
        ...item,
        x: intention.x,
        y: intention.y,
        width: intention.width,
        height: intention.height
      });
    }

    return patched;
  }
}
