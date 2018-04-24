# Testing

## Unit test without view layer in either NodeJS or browser environment

If you do unit test on component JS code, mock up `DndService` is easy because of dependency injection.

> We have yet not provided `DndServiceTest` mock class for you to import in test code. We will definitely provide it in future.

In this repo, there is some sample test code on the second example ["2. move object, preview off, use dndHover"](#/e2-simple-move-hover).

<compose view-model="../examples/e2-simple-move-hover/test" view="../examples/e2-simple-move-hover/index.html"></compose>

> There is an example to mock a DnD session in `container.spec.js`, you can use it as a base to test your DnD target `delegate`.

> There is no much mock in `box.spec.js`, because this source delegate didn't listen to any session based properties or events. If you need, use the a similar mock like the one in `container.spec.js`.

> No mouse events simulation needed to do unit test, as mouse events are hidden in `DndService`.

## Testing with view layer

This is what Aurelia official document demonstrated. When you do DOM based test, you can use the real `DndService` instance. You need to simulate mouse events to drive a DnD session.

Read [`bcx-aurelia-dnd`](https://github.com/buttonwoodcx/bcx-aurelia-dnd) test code to see some example on how to simulate a mouse event with enough information for `DndService` to work.

`bcx-aurelia-dnd` listens mouse/touch events at top HTML document level. For most of your mouse event simulation, it doesn't matter what's the `event.target`. But `event.target` does matter for your first mouse event simulation, the `'mousedown'` event that starts a DnD session.

The first `'mousedown'` `event.target` must be your intended source/handler(if defined) element (or its child element), `DndService` needs this information to find a matching DnD source delegate.
