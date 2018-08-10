import {inject, bindable} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';

@inject(DndService)
export class ResizeCorner {
  @bindable mode = 'n';
  @bindable itemId = '';

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
    return {type: 'resizeItem', id: this.itemId, resize: this.mode};
  }
}
