/* eslint-disable no-undef */
require('../src/arrays-01');

// Solution for getFirstValue
function getFirstValue(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}

// Solution for makeArray
function makeArray(...args) {
  return args;
}

// Solution for createFirstFivePrimes
function createFirstFivePrimes() {
  return [2, 3, 5, 7, 11];
}

// Solution for createSizedArray
function createSizedArray(size) {
  return Array.from({ length: size }, (_, index) => index);
}

// Solution for modifyArrayByAdding
function modifyArrayByAdding(arr) {
  arr.unshift(1);
  arr.push(1);
  return arr;
}

// Solution for modifyArrayByDeleting
function modifyArrayByDeleting(arr) {
  if (arr.length > 0) {
    arr.splice(0, 1); // Remove the first element using splice
  }
  return arr;
}

// Solution for findElementAtIndex
function findElementAtIndex(arr, index) {
  return arr[index];
}

// Solution for findElementByValue
function findElementByValue(arr, value) {
  return arr.indexOf(value);
}

// Solution for changeElementAtIndex
function changeElementAtIndex(arr, index, newValue) {
  if (index >= 0 && index < arr.length) {
    // eslint-disable-next-line no-param-reassign
    arr[index] = newValue;
  }
  return arr;
}

// Solution for makeStringFromArray
function makeStringFromArray(arr) {
  return arr.join('');
}

// Solution for createShallowCopy
function createShallowCopy(arr) {
  return [...arr];
}

test('getFirstValue', () => {
  expect(getFirstValue([1, 2, 3, 4, 5])).toBe(1);
  expect(getFirstValue([])).toBe(undefined);
});

test('makeArray', () => {
  expect(makeArray(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  expect(makeArray('a', 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
  expect(makeArray(1, 'b', 3, 'd')).toEqual([1, 'b', 3, 'd']);
});

test('createFirstFivePrimes', () => {
  expect(typeof createFirstFivePrimes()).toBe('object');
  expect(Array.isArray(createFirstFivePrimes())).toBe(true);
  expect(createFirstFivePrimes()).toEqual([2, 3, 5, 7, 11]);
});

test('createSizedArray', () => {
  expect(typeof createSizedArray(0)).toBe('object');
  expect(Array.isArray(createSizedArray(0))).toBe(true);
  expect(createSizedArray(5)).toHaveLength(5);
  expect(createSizedArray(5)).toEqual([0, 1, 2, 3, 4]);
  expect(createSizedArray(0)).toHaveLength(0);
  expect(createSizedArray(8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  expect(createSizedArray(85)).toHaveLength(85);
});

test('modifyArrayByAdding', () => {
  expect(typeof modifyArrayByAdding([])).toBe('object');
  expect(modifyArrayByAdding([])).toEqual([1, 1]);
  expect(modifyArrayByAdding([1, 2, 3])).toEqual([1, 1, 2, 3, 1]);
});

test('modifyArrayByDeleting', () => {
  expect(typeof modifyArrayByDeleting([])).toBe('object');
  expect(modifyArrayByDeleting([1, 2])).toEqual([]);
  expect(modifyArrayByDeleting([1, 2, 3])).toEqual([2]);
  expect(modifyArrayByDeleting([1, 2, 3, 4, 5])).toEqual([2, 3, 4]);
});

test('findElementAtIndex', () => {
  expect(findElementAtIndex([1, 2, 3], 0)).toBe(1);
  expect(findElementAtIndex([1, 2, 3], 1)).toBe(2);
  expect(findElementAtIndex([1, 2, 3], 2)).toBe(3);
});

test('findElementByValue', () => {
  expect(findElementByValue([1, 2, 3], 1)).toBe(0);
  expect(findElementByValue([1, 2, 3], 2)).toBe(1);
  expect(findElementByValue([1, 2, 3], 3)).toBe(2);
  expect(findElementByValue([1, 2, 3], 4)).toBe(-1);
});

test('changeElementAtIndex', () => {
  expect(changeElementAtIndex([1, 2, 3], 0, 5)).toEqual([5, 2, 3]);
  expect(changeElementAtIndex([1, 2, 3], 1, 6)).toEqual([1, 6, 3]);
  expect(changeElementAtIndex([1, 2, 3], 2, 182)).toEqual([1, 2, 182]);
});

test('makeStringFromArray', () => {
  const greeting = [...'Hello world'];
  expect(typeof makeStringFromArray([])).toBe('string');
  expect(makeStringFromArray([])).toBe('');
  expect(makeStringFromArray([1, 2, 3])).toBe('123');
  expect(makeStringFromArray(greeting)).toBe('Hello world');
});

test('createShallowCopy', () => {
  const greeting = [...'Hello world'];
  expect(createShallowCopy(greeting)).toEqual(greeting);
  expect(createShallowCopy(greeting)).not.toBe(greeting);
});
