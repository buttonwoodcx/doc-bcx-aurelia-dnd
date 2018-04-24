# DnD Preview

During a DnD session, the "image" floating with you mouse is called `preview`. Before we move on to DnD target, let's have a brief look what happened with the preview when you drag a box.

It's important to understand preview in order to understand its limitation.

## How preview was drawn

If using native HTML5 DnD API, the preview would be provided by browser automatically, you have little control of its appearance. Instead, as copied from dragula, `DndService` draws the preview "image" by creating a DOM element.

1. first, it clones the source element to a preview element.
2. add css class "bcx-dnd-preview" to the preview element. Most importantly this class sets `position: absolute !important;` on the preview.
3. get calculated page offset and size of source element, apply them to preview's `left,top,width,height` styles. So that preview will appear at the exact same location of source element.
4. append preview element directly to HTML body. This imposes limitation on css.

```css
.bcx-dnd-preview {
  position: absolute !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  box-shadow: 0 0 16px gray;
}
```

> Be clear, preview element lives outside of Aurelia. It's a static snapshot of source element.

## CSS limitation

Because preview is directly under HTML body, you need to make sure source element's css class works directly under HTML body.

If the source element's css is like `.example-container .example-box {...}`, the preview with class `.example-box` would not look right when `.example-container` is absent. If refactoring your css to fit `bcx-aurelia-dnd` is too much work, you can also [customize preview](#/customise-preview).

> `bcx-aurelia-dnd` style sheet (for `.bcx-dnd-preview` and others) was injected to the very top of HTML head. You can overwrite them in your style sheet, for instance, overwrite the `opacity` and `box-shadow` on `.bcx-dnd-preview`. You can also apply special style to one type of your preview with `.bcx-dnd-preview.example-box {...}`. Comparing to native HTML5 DnD API, we have much better control on preview.

## Hierarchy limitation

You may wonder how would preview on `<tr>` ever works. A cloned `<tr>`would not work out of a table.

> Luckily, since v0.4.0, `bcx-aurelia-dnd` ships with some default preview drawers for `<tr>` and `<li>` elements, we copy their `<table>`/`<ul>`/`<ol>` wrapper and make some adjustment on width and height. You rarely need to go down to [customize preview](#/customise-preview) to deal with `<tr>` preview anymore.

Let's move on to [DnD Target](#/dnd-target).
