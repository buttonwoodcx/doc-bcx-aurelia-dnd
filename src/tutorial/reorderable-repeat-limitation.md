## bcx-aurelia-reorderable-repeat limitation

`bcx-aurelia-reorderable-repeat` doesn't support repeat on `template` element.

Following html generates an Aurelia error.
<div><code-viewer value="<template reorderable-repeat.for=&quot;obj of array&quot;>
  <!-- inner html -->
</template>" mode="html"></code-viewer></div>

`bcx-aurelia-reorderable-repeat` only supports `Array` model, not `Set`, `Map` or `Object` (Those 3 are supported by standard Aurelia repeater). We are trying to reorder something, only array makes sense here.
