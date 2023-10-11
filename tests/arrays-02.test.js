/* eslint-disable no-undef */
require('../src/arrays-02');

// Solution for findTheCharacterAtIndex
function findTheCharacterAtIndex(str, index) {
  return str.charAt(index);
}
// Solution for sliceTheString
function sliceTheString(str, start, end) {
  return str.slice(start, end);
}
// Solution for splitTheString
function splitTheString(str, separator) {
  return str.split(separator);
}
// Solution for makeAllUpperCase
function makeAllUpperCase(str) {
  return str.toUpperCase();
}
// Solution for makeAllLowerCase
function makeAllLowerCase(str) {
  return str.toLowerCase();
}
// Solution for makeWordTitleCase
function makeWordTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
// Solution for replaceTheString
function replaceTheString(sentence, search, replacement) {
  return sentence.replace(search, replacement);
}
// Solution for makeSentenceTitleCase
function makeSentenceTitleCase(sentence) {
  const words = sentence.split(' ');
  const titleCaseWords = words.map((word) => makeWordTitleCase(word));
  return titleCaseWords.join(' ');
}

test('findTheCharacterAtIndex', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(findTheCharacterAtIndex(str, 0)).toBe('a');
  expect(findTheCharacterAtIndex(str, 25)).toBe('z');
});

test('sliceTheString', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(sliceTheString(str, 0, 3)).toBe('abc');
  expect(sliceTheString(str, 3, 6)).toBe('def');
});

test('splitTheString', () => {
  const str = 'Time will not slow down when something unpleasant lies ahead';
  expect(splitTheString(str, ' ')).toEqual([
    'Time',
    'will',
    'not',
    'slow',
    'down',
    'when',
    'something',
    'unpleasant',
    'lies',
    'ahead',
  ]);
});

test('makeAllUpperCase', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(makeAllUpperCase(str)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

test('makeAllLowerCase', () => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  expect(makeAllLowerCase(str)).toBe('abcdefghijklmnopqrstuvwxyz');
});

test('makeWordTitleCase', () => {
  let word = 'california';
  expect(makeWordTitleCase(word)).toBe('California');
  word = 'CaliFORnia';
  expect(makeWordTitleCase(word)).toBe('California');
});

test('replaceTheString', () => {
  const sentence = 'The quick brown fox jumps over the lazy dog';
  expect(replaceTheString(sentence, 'quick', 'slow')).toBe(
    'The slow brown fox jumps over the lazy dog',
  );
});

test('makeSentenceTitleCase', () => {
  const sentence = 'the quick brown fox jumps over the lazy dog';
  expect(makeSentenceTitleCase(sentence)).toBe(
    'The Quick Brown Fox Jumps Over The Lazy Dog',
  );
});
