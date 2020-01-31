import {inject, computedFrom} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator, DndService)
export class Repository {
  items = ['x', 'y', 3, 4, 'z'];
  intention;

  constructor(ea, dndService) {
    this.ea = ea;
    this.dndService = dndService;
  }

  attached() {
    this.dndService.addTarget(this);
    this.subscribers = [
      this.ea.subscribe('dnd:willStart', () => this.resetIntention()),
      this.ea.subscribe('dnd:didEnd', () => this.fulfillIntention()),
      this.ea.subscribe('reorderable-group:intention-changed', intention => {
        if (intention.type === 'bcx-aurelia-reorderable-repeat:er8') {
          this.intention = intention;
        }
      }),
    ];
  }

  detached() {
    this.subscribers.forEach(s => s.dispose());
  }

  resetIntention() {
    this.intention = null;
  }

  fulfillIntention() {
    if (!this.intention) return;
    const {item, fromIndex, fromRepeaterId, toRepeaterId} = this.intention;
    if (fromRepeaterId === 'repository') {
      if (toRepeaterId !== 'repository') {
        this.items.splice(fromIndex, 1);
      }
    } else if (toRepeaterId === 'repository') {
      this.items.push(item);
    }
    this.resetIntention();
  }

  // Note if you don't want to drag items back to this repository list,
  // remove line `this.dndService.addTarget(this);` from attached(),
  // and remove following three methods: dndCanDrop, dndHover and dndDrop.
  dndCanDrop(model) {
    // reorderable-group "er8"
    //
    // Internally reorderable-repeat uses the group name
    // as dnd model.type with a prefix
    //
    // This is for a normal bcx-aurelia-dnd instance to talk
    // with a reorderable repeat group
    return model.type === 'bcx-aurelia-reorderable-repeat:er8';
  }

  dndHover() {
    // This is unpublished details to talk with
    // reorderable repeat.
    // To tell the intention to other repeats so they know why to render.
    const {type, index, item, repeaterId} = this.dnd.model;
    const intention = {
      type: type,
      item: item,
      fromIndex: index,
      fromRepeaterId: repeaterId,
      toIndex: this.items.length,
      toRepeaterId: 'repository'
    };
    this.ea.publish('reorderable-group:intention-changed', intention);
  }

  dndDrop() {
    // noop, handled in dnd:didEnd callback
  }

  @computedFrom('items', 'intention')
  get patchedItems() {
    const {items, intention} = this;
    if (!intention) return items;
    const {item, fromIndex, fromRepeaterId, toRepeaterId} = intention;

    let patched = [...items];
    if (fromRepeaterId === 'repository') {
      if (toRepeaterId !== 'repository') {
        patched.splice(fromIndex, 1);
      }
    } else if (toRepeaterId === 'repository') {
      patched.push(item);
    }
    return patched;
  }
}
