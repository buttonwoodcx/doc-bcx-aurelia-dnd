## bcx-aurelia-reorderable-repeat Limitation

`bcx-aurelia-reorderable-repeat` doesn't support repeat on `template` element.

Following html generates an Aurelia error.
<div><code-viewer value="<template reorderable-repeat.for=&quot;obj of array&quot;>
  <!-- inner html -->
</template>" mode="html"></code-viewer></div>

`bcx-aurelia-reorderable-repeat` only supports `Array` model, not `Set`, `Map` or `Object` (Those 3 are supported by standard Aurelia repeater). We are trying to reorder something, only array makes sense here.

The DOM performance is theoretically really bad with `bcx-aurelia-reorderable-repeat`. But you would not feel it, since the array you want to reorder is typically not an array of thousands.

The performance hit is not due to `bcx-aurelia-dnd`, it is my understanding on Aurelia's repeater. In order to support reordering duplicated primitive values (like `['one', 'one', 'two']`), I removed all DOM related optimization code from standard repeater (which skips re-rendering when reordering `'one'` and `'one'`). I will definitely revisit the repeater optimization code.
