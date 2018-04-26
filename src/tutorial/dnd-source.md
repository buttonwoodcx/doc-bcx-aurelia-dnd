# DnD Source

Influenced by `react-dnd`, we have concept of:

  * __DnD source__, a DOM element that you can drag, plus associated logic.
  * __DnD target__, a DOM element that you can drop onto, plus associated logic.

Since the source and target are bound to DOM element, you need to register and deregister them in the right Aurelia life-cycle callback.

> The common practice is to do `addSource`/`addTarget` in `attached()`, and do `removeSource`/`removeTarget` in `detached()`.

Let's implement our first example ["1. move object"](#/e1-simple-move) step by step.

There is a container of three boxes inside. To implement moving box, we register every box as a source which we want to drag, and register the container as the target which will receive a drop.

### Implement source

The box component.

<div><code-viewer value="export class Box {
  //...
  attached() {
    this.dndService.addSource(this);
  }

  detached() {
    this.dndService.removeSource(this);
  }
  //...
}" mode="js"></code-viewer></div>

`dndService.addSource(delegate, options)` takes two arguments.

  * most of the time `delegate` object is your Aurelia component `addSource(this)`.
  * `options` is optional, we use it to alter default behaviour.

The first thing that a source `delegate` needs to provide, is a reference to the DOM element we want to drag.

> By default, `DndService` get DOM element from `delegate.dndElement`. The easiest way to set that reference is to use `ref="dndElement"` in your view template.

<div><code-viewer value="<template>
  <require from=&quot;./box.css&quot;></require>

  <div
    ref=&quot;dndElement&quot;
    class=&quot;example-box&quot;
    style.bind=&quot;positionCss&quot;
  >
    \${item.name}
  </div>
</template>" mode="html"></code-viewer></div>

> When you use `ref="dndElement"` in view template, Aurelia (not `DndService`) creates a property `dndElement` in your component pointing to the DOM element, you can access `this.dndElement` inside your component code.

> Note, `removeSource()` and `removeTarget()` can be called with either `delegate` object or element object. So in here, `this.dndService.removeSource(this.dndElement)` works same as `this.dndService.removeSource(this)`.

Now DOM is hooked up, source `delegate` needs to provide `dndModel()` callback, it should return a model which describes the meaning of the drag.

> When `DndService` detected user started a drag, it asks (only once) the source `delegate` `dndModel()` callback to return a model.

<div><code-viewer value="export class Box {
  //...
  dndModel() {
    return {
      type: 'moveItem',
      item: this.item
    };
  }
  //...
}" mode="js"></code-viewer></div>

> `DndService` has zero requirement on the shape of the model. Even if you return `undefined`, `DndService` would not complain, although there is no practical usage of returning `undefined`.

> You should make your own convention of the model shape. A common practice is to provide a `type` in the model, which you can easily check against in other parts of your app.

### Here is what we got so far, movable boxes

There is no effect on drop, because we have not registered any DnD target yet.

<compose view-model="../examples/e1-simple-move-step-1/index"></compose>

Let's move on to understand [DnD Preview](#/dnd-preview).

