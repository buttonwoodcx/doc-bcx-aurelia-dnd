import $ from 'jquery';

export class TableContainer {
  items = [
    {name: 'Bob', age: 23},
    {name: 'Ali', age: 37},
    {name: 'Tom', age: 12},
    {name: 'Emma', age: 18}
  ];

  drawPreview(person) {
    const jq = $('<div class="er4-drag-person"></div>');
    jq.text(person.name);
    return jq.get(0);
  }

  orderChanged(orderedItems) {
    /* eslint no-console: 0 */
    console.log('Ordered items: ' + JSON.stringify(orderedItems));
  }
}
