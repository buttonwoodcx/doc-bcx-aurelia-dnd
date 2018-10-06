# Reordering across multiple lists

From `v0.5.0`, `reorderable-repeat` supports reordering across multiple lists.

## `reorderable-group`

By default, `reorderable-repeat` isolates every repeaters to avoid crosstalk. To allow reordering across multiple repeaters, use attribute `reorderable-group="groupName"` to mark those repeaters with same `groupName`.

> Here we demo two lists in one group. But there is no limit on how many lists you can assign to same group.

<compose view-model="../examples/er6-multi-lists/index"></compose>

> Since we are moving item across two or more arrays, you need to make sure the view templates for every repeaters in the group can **handle all model shapes**.

> Different from other attributes like `reorderable-direction`, `reorderable-group` can only accept string literal, not a binding. `reorderable-group.bind="group"` would not work. We only support static group name, not dynamic group name.

> In multi-list mode, the `reorderable-after-reordering` callback won't get the 2nd argument (the change `{fromIndex, toIndex}`) if the change is crossing two lists. It only gets the 2nd argument of change when the reordering is locally within one of the lists.

Too easy? Not yet, there is one big problem. Try move all numbers to letters array, once left side is empty, there is no way to move any item back!

What's going on?

## `reorderable-group-for` custom attribute

Different from most DnD libraries, `reorderable-repeat` **doesn't have concept of container**, all DnD events are handled by those repeated views themselves. That's why `reorderable-repeat` is so easy to use.

This simplification created a problem with empty array model. When array is empty, there is no child views to handle DnD events.

To cater the deficit, `reorderable-group-for` custom attribute is introduced to behave similar to a container.

It must be strictly used as:

<div><code-viewer value="<some-element reorderable-group-for.bind=&quot;arrayModel&quot;> ... </some-element>" mode="html"></code-viewer></div>

> `arrayModel` is the same model you used in `reorderable-repeat.for="item of arrayModel"`.

Usually, you use `reorderable-group-for` on some parent element of the repeater. It behaves like an extra DnD target for that repeater. It also effectively enlarge the responsive area.

Now even empty array have some DOM to receive DnD events.

<compose view-model="../examples/er7-multi-lists-with-group-for/index"></compose>

> It's not required to use `reorderable-group-for` on parent element of the repeater. You can use on any DOM element, it will find the corresponding repeater automatically.

> `reorderable-group-for` is named after `<label for="field">`. You can think it behaves like a `label` (`reorderable-group-for`) to an `input` (`reorderable-repeater` with group). `label` can be parent element of `input` or sibling element of `input`, when you click the `label` (hover the `reorderable-group-for`), it behaves like you clicked the `input` (hover child views of `reorderable-repeater`).

That concludes all features of `bcx-aurelia-reorderable-repeat`.
