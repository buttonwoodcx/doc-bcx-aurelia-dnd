import {inject, bindable, computedFrom} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';

@inject(DndService)
export class Box {
  @bindable item;

  constructor(dndService) {
    this.dndService = dndService;
  }

  attached() {
    this.dndService.addSource(this, {noPreview: true});
  }

  detached() {
    this.dndService.removeSource(this);
  }

  dndModel() {
    return {
      type: 'moveItem',
      id: this.item.id
    };
  }

  @computedFrom('item', 'item.x', 'item.y', 'item.width', 'item.height')
  get positionCss() {
    const x = (this.item && this.item.x) || 0;
    const y = (this.item && this.item.y) || 0;
    const width = (this.item && this.item.width) || 0;
    const height = (this.item && this.item.height) || 0;

    return {
      left: x + 'px',
      top: y + 'px',
      width: width + 'px',
      height: height + 'px'
    };
  }
}
