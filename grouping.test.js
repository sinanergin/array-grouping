const groupArrayElements = require('./grouping');

test('(5, 3) combination test', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5],
  ]);
});

test('(8, 3) combination test', () => {
  expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});
