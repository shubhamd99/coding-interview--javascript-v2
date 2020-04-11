const removeDuplicates = require('./index');

test('removeDuplicates function exists', () => {
  expect(removeDuplicates).toBeDefined();
});

test('Find duplicates in an array', () => {
  expect(removeDuplicates([0, 2, 0, 1, 3, 3, 4, 4, 5])).toEqual([0, 3, 4]);
});

test('Find duplicates in an array', () => {
    expect(removeDuplicates([0,2,0,1,3,3])).toEqual([0, 3]);
});

test('Find duplicates in an array', () => {
    expect(removeDuplicates([0, 'a', 0, 1, 'a', 3])).toEqual([0, 'a']);
});