# TypeScript Support

`bcx-aurelia-dnd` includes a type declaration file for basic TypeScript support.

`bcx-aurelia-reorderable-repeat` has no JavaScript interface exposed to end user, hence no type declaration file is provided.

## Additional type for bcx-aurelia-dnd

In TypeScript project, on top of normal import, you can import additional interface declarations:

* `SourceDelegate` for dnd source.
* `TargetDelegate`, `TargetDelegateInjectedDnd`, `DndLocation` for dnd target:

> This is for TypeScript to know better about the types. It's optional but recommended, you don't need to import them for TypeScript to work.

Here is an example.

<div><code-viewer value="import {DndService,
        TargetDelegate,
        TargetDelegateInjectedDnd,
        DndLocation} from 'bcx-aurelia-dnd';
import {autoinject, computedFrom} from 'aurelia-framework';

@autoinject
export class App implements TargetDelegate {
  dndService: DndService;

  // need to declare 'dnd' before using it,
  // otherwise TypeScript compiler will complain.
  // 'dnd?: any;' also works, but has no typing information.
  dnd?: TargetDelegateInjectedDnd;

  constructor(dndService: DndService) {
    this.dndService = dndService;
  }

  attached() {
    this.dndService.addTarget(this);
  }

  detached() {
    this.dndService.removeTarget(this);
  }

  dndCanDrop(model: any): boolean {
    //...
  }

  dndDrop(location: DndLocation): void {
    //...
  }

  @computedFrom('dnd', 'dnd.isProcessing', 'dnd.canDrop', 'dnd.isHoveringShallowly')
  get overMe(): Boolean {
    const {dnd} = this;
    if (!dnd) return false;

    // with TargetDelegateInjectedDnd, TypeScript knows that
    // isProcessing, canDrop, isHoveringShallowly are all boolean.

    const {isProcessing, canDrop, isHoveringShallowly} = dnd;
    return isProcessing && canDrop && isHoveringShallowly;
  }
}" mode="js"></code-viewer></div>
