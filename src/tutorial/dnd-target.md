# DnD Target

## Implement target

While source `delegate` has one mandatory method `dndModel()`, target `delegate` has two: `dndCanDrop(model)` and `dndDrop(location)`.

* `dndCanDrop(model)` decides whether this target can be dropped onto.
* `dndDrop(location)` is called when drop happened on this target. This is where you should finally mutate the state of your component. This callback will not be called if `dndCanDrop(model)` returned falsy.

> Note `dndDrop(location)` doesn't have `model` in the arguments, you get current DnD model from `this.dnd.model`. More explanation on `this.dnd` after following code snippet.

```javascript
export class Container {
  // ... add/removeTarget in attached/detached
  // ... hook up dndElement in container.html

  dndCanDrop(model) {
    return model.type === 'moveItem';
  }

  dndDrop(location) {
    const {item} = this.dnd.model;
    const {previewElementRect, targetElementRect} = location;
    const newLoc = {
      x: previewElementRect.x - targetElementRect.x,
      y: previewElementRect.y - targetElementRect.y
    };
    item.x = newLoc.x;
    item.y = newLoc.y;

    // move the item to end of array, in order to show it above others
    const idx = this.items.indexOf(item);
    if (idx >= 0) {
      this.items.splice(idx, 1);
      this.items.push(item);
    }
  }
}
```

### Injected `dnd` property

When a drag started, `DndService` got a model from source element (`dndModel()`), then use the model to ask (only once) every targets' `dndCanDrop(model)`, it also injects a special property `dnd` onto target `delegate`.

* __dnd.isProcessing__, `true` during a DnD session, no matter whether can drop on this target or not.
* __dnd.canDrop__, a boolean, it's the cached result of `dndCanDrop(model)`.
* __dnd.model__, the model of the DnD session, no matter whether can drop on this target or not.
* __dnd.isHoveringShallowly__, `true` when mouse is hovering directly over target element.
* __dnd.isHovering__, `true` when mouse is hovering within target element region.
* all of above have value `undefined` when not in a DnD session.

Only when `canDrop` is true, the target delegate has chance of receiving `dndDrop(location)` callback.

### `location` argument

There are few objects in location argument for `dndDrop(location)`.

* __location.mouseStartAt__, drag start mouse location {x, y} (not {left, top}).
* __location.mouseEndAt__, drop end mouse location {x, y} for `dndDrop()`, or current mouse location for `dndHover()`.
* __location.sourceElementRect__, source element location and size {x, y, width, height}.
* __location.previewElementRect__, preview element location and size {x, y, width, height}.
* __location.targetElementRect__, target element location and size {x, y, width, height}.

> All `x` and `y`, are page offset (relative to whole HTML body), not client offset (relative to browser current view-port). Page offset is stabler to use than client offset, especially when there is scrolling or browser zooming.

> For convenience, `previewElementRect` always presents. Even if you turn off the preview (you will see that in [customize preview](#/customise-preview)), it still reports location and size as if you were using default preview.

Beware, `sourceElementRect` is not current location of source element. It is a cached location for the source element at the time when DnD session started.

The reason behind this, is that `DndService` doesn't retain the source delegate/element during a DnD session. Even when the source was removed by `removeSource(...)` during a DnD session, `DndService` would not care. `DndService` gets the model, and caches source element location at start of a DnD session, that's the only time it ever uses that source delegate/element.

> In fact, `addSource()`, `removeSource()`, `addTarget()`, `removeTarget()` are **all allowed any time**, within or out of a DnD session. `DndService` thrives on dynamic behaviour. This will likely happen in your app without your notice, we will elaborate on this topic when examining `dndHover`.

With that much code, we got movable boxes.

<compose view-model="../examples/e1-simple-move-step-2/index"></compose>

There is one more thing we want to fix. During dragging a box, the original source box still presents. How about hide the original box while dragging.

## Style DnD Source Element

While DnD target `delegate` got special injected `dnd` property, DnD source `delegate` got none. But you can observe two properties directly on `dndService` instance: `isProcessing` and `model`.

```javascript
export class Box {
  //...
  @computedFrom('dndService.isProcessing', 'dndService.model')
  get draggingMe() {
    return this.dndService.isProcessing &&
           this.dndService.model.item === this.item;
  }
}
```

> `dndService.isProcessing` and `dndService.model` are exactly same as DnD target `delegate`'s `dnd.isProcessing` and `dnd.model`. In fact, you can use them as well in DnD target code.

> Here we use them to identify this box (DnD source) is being dragged.

Hide the element when dragging, so user only sees the preview element during DnD session.

```html
<template>
  <require from="./box.css"></require>

  <div
    ref="dndElement"
    class="example-box"
    style.bind="positionCss"
    show.bind="!draggingMe"
  >
    ${item.name}
  </div>
</template>
```

> Note we use `show.bind`, not `if.bind`. Aurelia `if.bind` adds/removes the element from DOM tree, while `show.bind` simply toggles css `visibility`. Because we have `ref="dndElement"` on this DOM node, we really don't want `if.bind` dynamically adds/removes it.

> In Aurelia, it's a common practice to not put `ref` behind `if` or `repeat.for`.

Now we got the full version of the first example.

<compose view-model="../examples/e1-simple-move/index"></compose>

## Cross Talk

If your computer screen is big enough to show both "e1-simple-move-step-2" and "e1-simple-move" demo apps within same frame (or you can use browser zoom-out to bring them into same screen), you can actually drag box from one app to the other, that generates cross-talk and can mutate the original box you dragged.

> This is because both demos has exactly same check in `dndCanDrop(model)`, `model.type === 'moveItem'`.

> To avoid cross-talk in your app, design `dndModel()` and `dndCanDrop()` defensively for target to only respond to its interested source model. For instance, if we distinguish the `type` of two demos, set `type` to `moveItem-e1-step-1` and `moveItem-e1` respectively, we can eliminate cross talk.

Let's move on to [turn off preview, use dndHover](#/turn-off-preview-use-hover).
