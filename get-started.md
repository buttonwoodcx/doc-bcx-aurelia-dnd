---
layout: default
title: Get Started
nav_order: 2
permalink: /get-started
has_children: true
---

# Get Started

```bash
npm i bcx-aurelia-dnd
```

Or
```bash
yarn add bcx-aurelia-dnd
```

## Use inside Aurelia app

There is a single class `DndService` provided by `bcx-aurelia-dnd`. Inject it to your component.

ESNext
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

TypeScript
```ts
import {autoinject} from 'aurelia-framework';
import {DndService} from 'bcx-aurelia-dnd';

@autoinject
export class YourComponent {
  constructor(public dndService: DndService) {}
}
```

> Here we rely on default behaviour of Aurelia DI (dependency injection). Aurelia DI creates a singleton `dndService` instance for all components to share.
