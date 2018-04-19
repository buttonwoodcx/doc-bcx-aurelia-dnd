# FAQ

## How was `bcx-aurelia-dnd` created

In 2016, when we were converting our [Buttonwood Cloud Broker](http://www.buttonwood.com.au/products/cloud-broker/cloud-broker/) front-end from React to Aurelia, one obstacle of the re-write is missing drag-and-drop library for our blueprint composer. Previously we were using [React DnD](http://react-dnd.github.io/react-dnd/), but there is no equivalent in Aurelia. There are plenty DOM based DnD libraries in JavaScript world, [`dragula`](https://bevacqua.github.io/dragula/) is the best in our eyes.

We copied `dragula` code, removed all its DOM mutation code (we don't need that in Aurelia), made a working DnD library in one day. `bcx-aurelia-dnd` source code is largely unchanged since that first implementation.

Thanks for Aurelia, `bcx-aurelia-dnd` implementation is very simple. The source code is about 700 lines of JavaScript, even most of it were copied from dragula to handle events and styling. As always, similar to most libraries, the [source code](https://github.com/buttonwoodcx/bcx-aurelia-dnd) is way shorter than documentation.

## Why based on `dragula`, not native HTML5 DnD API

[dragula](https://bevacqua.github.io/dragula/) implements DnD in plain mouse/touch events, not in native HTML5 DnD API. [Here](https://www.danyow.net/drag-and-drop-with-aurelia/) is the place where we were introduced to dragula, it has some links for issues around native HTML5 DnD API. It resonated with our experience on React DnD which uses native HTML5 DnD API. We had issues on nested source/target and some annoying browser behavior (cursor in IE) in native HTML5 DnD API. None of that affected our dragula based DnD.

Another bonus of dragula, it supports mobile devices! All examples here works on iPad and phones.

## Why bcx-aurelia-dnd is not an Aurelia plugin

Technically, `bcx-aurelia-dnd` doesn't depend on Aurelia, it only uses `aurelia-event-aggregator` to provide better integration with Aurelia. There is nothing preventing you from using it with other front-end frameworks or even vanilla JavaScript. But it's easier to use it inside Aurelia app, because of Aurelia's ability to observe changes on plain JavaScript properties.
