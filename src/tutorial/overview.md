# bcx-aurelia-dnd

> A generic drag-and-drop lib for [Aurelia](https://aurelia.io), works on both desktop and mobile, provides APIs fit in MVC/MVVM natively. The design is similar to [`react-dnd`](http://react-dnd.github.io/react-dnd/).

If you only want something using DnD to reorder a list, [`bcx-aurelia-reorderable-repeat`](#/reorderable-repeat) is a deadly simple Aurelia plugin based on bcx-aurelia-dnd.

If you want to play with the source code of included examples.

```
git clone git@github.com:buttonwoodcx/doc-bcx-aurelia-dnd.git
cd doc-bcx-aurelia-dnd
npm i -g aurelia-cli # if you have not installed aurelia-cli
npm i # yarn doesn't work because of https://github.com/yarnpkg/yarn/issues/5235
au run --watch
```

## We use [`dragula`](https://bevacqua.github.io/dragula/) algorithm, but `bcx-aurelia-dnd` is not a `dragula` wrapper

We use `dragula`'s algorithm to avoid native HTML5 DnD API (see [FAQ](#/faq)), we don't inherit or expose any `dragula` API (they don't even exist in the code). We provide APIs fit in MVC/MVVM natively.

## Alternative projects

There are few alternative projects in Aurelia community. List them here for reference.

1. **[`aurelia-dragula`](https://github.com/michaelmalonenz/aurelia-dragula)** a `dragula` wrapper to provide convenient interface to Aurelia. Handy to existing `dragula` users.

2. **[`oribella-aurelia-sortable`](https://github.com/oribella/aurelia-sortable)** based on very interesting [`oribella`](https://github.com/oribella/oribella), can sort list or multiple lists.

3. **[`aurelia-sortablejs`](https://github.com/eriklieben/aurelia-sortablejs)** based on [`Sortablejs`](https://github.com/rubaxa/Sortable), can sort list or multiple lists, visually appealing.

## Use inside Aurelia app

To start with your Aurelia app.

> with aurelia-cli `au install bcx-aurelia-dnd`.

> with webpack `npm i bcx-aurelia-dnd`.

There is a single class `DndService` provided by `bcx-aurelia-dnd`. Inject it to your component.

```js
import {inject} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';

@inject(DndService)
export class YourComponent {
  constructor(dndService) {
    this.dndService = dndService;
  }
}
```

> Here we rely on default behavior of Aurelia DI (dependency injection). Aurelia DI creates a singleton `dndService` instance for all components to share.

> For TypeScript user, have a look at [TypeScript Support](#/typescript-support).

Let's get started to add a [DnD source](#/dnd-source).
