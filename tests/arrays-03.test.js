/* eslint-disable no-undef */
const {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
  dropRight,
  dropLeft,
  checkArrayForValue,
} = require('../src/arrays-03');

test('addUpArrayElements', () => {
  expect(addUpArrayElements([1, 2, 3, 4, 5])).toBe(15);
  expect(addUpArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(addUpArrayElements([])).toBe(0);
});

test('makeSquareNumbers', () => {
  const sampleArray = [1, 2, 3, 4, 5];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = [1, 4, 9, 16, 25];
  expect(makeSquareNumbers(frozenArray)).toEqual(expectedArray);
  expect(makeSquareNumbers(frozenArray)).not.toBe(sampleArray);
});

test('filterForLargeWords', () => {
  const sampleArray = ['a', 'big', 'black', 'bear', 'is', 'running'];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = ['black', 'bear', 'running'];
  expect(filterForLargeWords(frozenArray, 3)).toEqual(expectedArray);
  expect(filterForLargeWords(frozenArray, 3)).not.toBe(sampleArray);
});

test('findTheFirstEvenNumber', () => {
  let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(findTheFirstEvenNumber(sampleArray)).toBe(2);
  sampleArray = [1, 5, 9, 55, 100, 110, 140, 150, 200, 300];
  expect(findTheFirstEvenNumber(sampleArray)).toBe(100);
});

test('sortCaseSensitive', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = ['A', 'bear', 'big', 'black', 'is', 'running'];
  expect(sortCaseSensitive(frozenArray)).toEqual(expectedArray);
  expect(sortCaseSensitive(frozenArray)).not.toBe(sampleArray);
});

test('makeTheString', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const frozenArray = Object.freeze(sampleArray);
  const expectedString = 'A big black bear is running';
  expect(makeTheString(frozenArray, ' ')).toBe(expectedString);
  expect(makeTheString(frozenArray, ' ')).not.toBe(sampleArray);
});

test('reverseTheArray', () => {
  const sampleArray = ['A', 'big', 'black', 'bear', 'is', 'running'];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = ['running', 'is', 'bear', 'black', 'big', 'A'];
  expect(reverseTheArray(frozenArray)).toEqual(expectedArray);
  expect(reverseTheArray(frozenArray)).not.toBe(sampleArray);
});

test('makeMirrorArray', () => {
  let sampleArray = [1, 2];
  const frozenArray = Object.freeze(sampleArray);
  let expectedArray = [1, 2, 1];
  expect(makeMirrorArray(frozenArray)).toEqual(expectedArray);
  expect(makeMirrorArray(frozenArray)).not.toBe(sampleArray);
  sampleArray = [1, 4, 8, 10, -21];
  const frozenArray2 = Object.freeze(sampleArray);
  expectedArray = [1, 4, 8, 10, -21, 10, 8, 4, 1];
  expect(makeMirrorArray(frozenArray2)).toEqual(expectedArray);
  expect(makeMirrorArray(frozenArray2)).not.toBe(sampleArray);
});

test('dropRight', () => {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = [1, 2, 3, 4, 5, 6, 7];
  expect(dropRight(frozenArray, 3)).toEqual(expectedArray);
  expect(dropRight(frozenArray, 3)).not.toBe(sampleArray);
});

test('dropLeft', () => {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const frozenArray = Object.freeze(sampleArray);
  const expectedArray = [5, 6, 7, 8, 9, 10];
  expect(dropLeft(frozenArray, 4)).toEqual(expectedArray);
  expect(dropLeft(frozenArray, 4)).not.toBe(sampleArray);
});

test('checkArrayForValue', () => {
  const sampleArray = [1, true, 3, NaN];
  const frozenArray = Object.freeze(sampleArray);
  expect(checkArrayForValue(frozenArray, 1)).toBe(true);
  expect(checkArrayForValue(frozenArray, true)).toBe(true);
  expect(checkArrayForValue(frozenArray, 3)).toBe(true);
  expect(checkArrayForValue(frozenArray, NaN)).toBe(true);
  expect(checkArrayForValue(frozenArray, 'a')).toBe(false);
});
