export class ListContainer {
  numbers = [0, 1, 2];
  letters = ['a', 'b'];

  numbersReordered(items, change) {
    console.log('numbers', items);
    console.log('numbers change', change);
  }

  lettersReordered(items, change) {
    console.log('letters', items);
    console.log('letters change', change);
  }
}
