# bcx-aurelia-reorderable-repeat basics

A customised Aurelia repeater that supports drag-and-drop reordering automatically.

## Add to your Aurelia app

### Install package

`npm i bcx-aurelia-reorderable-repeat` or `yarn add bcx-aurelia-reorderable-repeat`.

> For aurelia-cli users, please make sure to use aurelia-cli version `1.0.0-beta.1` or above.

### Load plugin

In you app main.js file.

<div><code-viewer value="aurelia.use.plugin(PLATFORM.moduleName('bcx-aurelia-reorderable-repeat'));" mode="js"></code-viewer></div>

## Usage

Simply use `reorderable-repeat.for="item of items"` in your view template. That's it!

<compose view-model="../examples/er1-reorderable-repeat/index"></compose>

### Customise item style under drag

If you have not read [tutorial](#/overview) for `bcx-aurelia-dnd`, we recommend you to read it through. If you have not, here are some key information:

* when you drag a item, the "image" floating with you mouse is called `preview`, it's a DOM element (`bcx-aurelia-dnd` cloned from the source element) lives outside of Aurelia's control.

* `bcx-aurelia-reorderable-repeat` hides the algorithm showing in example [6. underneath algorithm of reorderable-repeat](#/e6-reorder-list).

* the original source element (which you started dragging) is still there. `bcx-aurelia-reorderable-repeat` just added a css class `reorderable-repeat-dragging-me` to the element.

> The style defined in class `reorderable-repeat-dragging-me` is just hiding the source element without affecting layout.

<div><code-viewer value=".reorderable-repeat-dragging-me {
  visibility: hidden;
}" mode="css"></code-viewer></div>

To customise the DOM under drag, you can overwrite `.reorderable-repeat-dragging-me` in your style sheet, or use `.reorderable-repeat-dragging-me.your-class` to localize the customisation.

> When customising, remember to unset the visibility first `visibility: visible; /* or inherit; */`.

Here is a style customised version of previous example.

<compose view-model="../examples/er2-reorderable-repeat-customise-style/index"></compose>

Note in customisation, you need to unset `visibility` first.

> While the item being dragged receives class `.reorderable-repeat-dragging-me`, all items involved in reordering receive additional class `.reorderable-repeat-reordering`. Be default, `.reorderable-repeat-reordering` has no impact on style.

### Use handler to limit where user can start drag

`bcx-aurelia-dnd` supports optional `handler` option on source `delegate` to limit where drag can start. In `bcx-aurelia-reorderable-repeat`, you can pass optional attribute `reorderable-dnd-handler-selector` on the repeated DOM to select a `handler` for undernearth source elements.

> `reorderable-dnd-handler-selector` is used on every source elements with `element.querySelector(...)` to find out the handler.

<compose view-model="../examples/er3-reorderable-repeat-with-handler/index"></compose>

### Customise Preview

`bcx-aurelia-reorderable-repeat` does not hide `bcx-aurelia-dnd`'s limitation on drawing preview.

> To understand this topic, please go through full `bcx-aurelia-dnd` [tutorial](#/overview).

There are two situations you want to use customised preview.

1. when the built-in preview drawer doesn't draw preview to your expectation, either due to css limitation or DOM hierarchy limitation.
2. when you want a totally different preview, for instance, customise "cursor" during DnD session.

To draw a customised preview, use optional attribute `reorderable-dnd-preview`. The attribute supports 2 forms:

* `reorderable-dnd-preview="methodName"` the string passed in is a method name on your component. The method will receive the current item (model, not DOM) been dragged, it needs to return a DOM element (unattached to DOM tree) with reasonable size.

* `reorderable-dnd-preview.call="methodInScope(smthInScope, smth2InScope)"` the evaluated result of the function call must be a DOM element (unattached to DOM tree) with reasonable size.

<compose view-model="../examples/er4-reorderable-repeat-customise-preview/index"></compose>

Here we use `reorderable-dnd-preview="drawPreview"`, you can also use `reorderable-dnd-preview.call="drawPreview(item)"`

### Callback after reordering

Use optional attribute `reorderable-after-reordering` to specify a callback. Like `reorderable-dnd-preview`, it supports 2 forms.

> When using the string form with method name, that method will receive 2 arguments: 1) the array model that has been reordered, 2) the change `{fromIndex, toIndex}`.

The example above shows the usage of `reorderable-after-reordering`, it prints the list in browser console after reordering.

### Direction of DOM flow

By default, `bcx-aurelia-reorderable-repeat` thinks your DOM list flows from top to bottom.

If your DOM list flows rather from left to right (or from right to left), you can pass attribute `reorderable-direction="right"` (for flow from left to right) or `reorderable-direction="left"` (for flow from right to left).

> The default value of "reorderable-direction" is "down", means flow from top to bottom.

> We support `reorderable-direction="up"` (for flow from bottom to top). You can achieve this unusual layout with `flex-direction: column-reverse;`.

> Even in layout with `flex-wrap: wrap;`, `reorderable-repeat` still works fine.

<compose view-model="../examples/er5-reorderable-repeat-direction/index"></compose>

Let's move on to [reordering across multiple lists](#/multi-lists).

