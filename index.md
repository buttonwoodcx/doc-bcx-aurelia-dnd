---
layout: default
title: Home
nav_order: 1
permalink: /
---

# bcx-aurelia-dnd
{: .fs-8 }

A generic drag-and-drop lib mainly for [Aurelia](https://aurelia.io), mobile friendly, with APIs fit in MVC/MVVM natively.
{: .fs-6 .fw-300 }

[Get Started](./get-started){: .btn .btn-blue .mr-3 .fs-5 } [View on Github](https://github.com/buttonwoodcx/bcx-aurelia-dnd){: .btn .fs-5 }

# bcx-aurelia-reorderable-repeat
{: .fs-8 }

Built on top of bcx-aurelia-dnd, a customised Aurelia repeater that supports drag-and-drop reordering automatically.
{: .fs-6 .fw-300 }

[Get Started](./reorderable-repeat){: .btn .btn-blue .mr-3 .fs-5 } [View on Github](https://github.com/buttonwoodcx/bcx-aurelia-reorderable-repeat){: .btn .fs-5 }

---

## bcx-aurelia-dnd use [dragula](https://bevacqua.github.io/dragula/) algorithm, but is not just a dragula wrapper

bcx-aurelia-dnd use `dragula`'s algorithm to avoid native HTML5 DnD API, but doesn't inherit or expose any `dragula` API (they don't even exist in the code). APIs are designed to fit in MVC/MVVM natively.

### Why based on dragula, not native HTML5 DnD API

[dragula](https://bevacqua.github.io/dragula/) implements DnD in plain mouse/touch events, not in native HTML5 DnD API. [Here](https://www.danyow.net/drag-and-drop-with-aurelia/) is the place where we were introduced to dragula, it has some links for issues around native HTML5 DnD API. It resonated with our experience on React DnD which uses native HTML5 DnD API. We had issues on nested source/target and some annoying browser behaviour (cursor in IE) in native HTML5 DnD API. None of that affected our dragula based DnD.

Another bonus of dragula, it supports mobile devices. All examples here works on iPad and phones.

## Inspired by [react-dnd](http://react-dnd.github.io/react-dnd/)

The API design is heavily inspired by react-dnd. And it is largely simplified because of Aurelia's ability to observe plain JavaScript object.

## bcx-aurelia-dnd is not an Aurelia plugin

Technically, `bcx-aurelia-dnd` doesn't depend on Aurelia, it only uses `aurelia-event-aggregator` to provide better integration with Aurelia. There is nothing preventing you from using it with other front-end frameworks or even vanilla JavaScript. For example, we have an example with Vue 3 [Move box (Vue 3)](./examples/move-box-vue3).

## Alternative projects

There are few alternative projects in Aurelia community. List them here for reference.

1. [aurelia-dragula](https://github.com/michaelmalonenz/aurelia-dragula)
  * a dragula wrapper to provide convenient interface to Aurelia. Handy to existing dragula users.
2. [oribella-aurelia-sortable](https://github.com/oribella/oribella/tree/master/packages/aurelia-sortable)
  * based on very interesting [oribella](https://github.com/oribella/oribella), can sort list or multiple lists.
3. [aurelia-sortablejs](https://github.com/eriklieben/aurelia-sortablejs)
  * based on [Sortablejs](https://github.com/rubaxa/Sortable), can sort list or multiple lists, visually appealing.

## License

`bcx-aurelia-dnd` is licensed under the [MIT license](https://github.com/buttonwoodcx/bcx-aurelia-dnd/blob/master/LICENSE).
