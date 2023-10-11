/* eslint-disable no-undef */

require('../src/arrays-04');
// Solution for getAbsoluteSum
function getAbsoluteSum(arr) {
  return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}

// Solution for removeStrings
function removeStrings(arr) {
  return arr.filter((item) => typeof item !== 'string');
}

// Solution for findMinMax
function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

// Solution for getTelNo
function getTelNo(arr) {
  const formattedArr = arr.slice(0, 10); // Take the first 10 digits
  const [a, b, c, d, e, f, g, h, i, j] = formattedArr;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

test('getAbsoluteSum', () => {
  expect(getAbsoluteSum([1, 2, 3])).toBe(6);
  expect(getAbsoluteSum([-1, -2, -3])).toBe(6);
  expect(getAbsoluteSum([1, -2, 3])).toBe(6);
  expect(getAbsoluteSum([0, -0])).toBe(0);
});

test('removeStrings', () => {
  expect(removeStrings([1, 'ants', 'bugs', 4, 18])).toEqual([1, 4, 18]);
  expect(removeStrings(['a', 'b', 'c'])).toEqual([]);
  const sampleArray = [1, 2, 3];
  expect(removeStrings(sampleArray)).not.toBe(sampleArray);
});

test('findMinMax', () => {
  expect(findMinMax([1, 2, 33, 10])).toEqual([1, 33]);
  expect(findMinMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
  expect(findMinMax([1, 10])).toEqual([1, 10]);
  const sampleArray = [1, 2];
  expect(findMinMax(sampleArray)).not.toBe(sampleArray);
});

test('getTelNo', () => {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const checkArray = [...sampleArray];
  expect(getTelNo(sampleArray)).toBe('(123) 456-7890');
  expect(sampleArray).toEqual(checkArray);
});
