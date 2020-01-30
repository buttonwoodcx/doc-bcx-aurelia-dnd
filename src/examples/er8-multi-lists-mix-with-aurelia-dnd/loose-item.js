import {inject, bindable} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';

@inject(DndService)
export class LooseItem {
  @bindable item;
  @bindable index;

  constructor(dndService) {
    this.dndService = dndService;
  }

  attached() {
    this.dndService.addSource(this);
  }

  dndModel() {
    // This is the internal dnd model that other
    // reorderable-repeats expect.
    return {
      type: 'bcx-aurelia-reorderable-repeat:er8',
      index: this.index,
      item: this.item,
      repeaterId: 'repository'
    };
  }
}
