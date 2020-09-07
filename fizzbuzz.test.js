const fizzbuzz = require('./fizzbuzz')

test('put 1 should return 1', () => {
  expect(fizzbuzz(1)).toEqual(1)
});

test('put 2 should return 2', () => {
  expect(fizzbuzz(2)).toEqual(2)
});

test('put 3 should return fizz', () => {
  expect(fizzbuzz(3)).toEqual('fizz')
});

test('put 4 should return 4', () => {
  expect(fizzbuzz(4)).toEqual(4)
});

test('put 5 should return buzz', () => {
  expect(fizzbuzz(5)).toEqual('buzz')
});

test('put 6 should return fizz', () => {
  expect(fizzbuzz(6)).toEqual('fizz')
});

test('put 7 should return 7', () => {
  expect(fizzbuzz(7)).toEqual(7)
});


test('put 8 should return 8', () => {
  expect(fizzbuzz(8)).toEqual(8)
});

test('put 9 should return 9', () => {
  expect(fizzbuzz(9)).toEqual('fizz')
});


test('put 10 should return 10', () => {
  expect(fizzbuzz(10)).toEqual('buzz')
});

test('put 11 should return 11', () => {
  expect(fizzbuzz(11)).toEqual(11)
});

test('put 12 should return 12', () => {
  expect(fizzbuzz(12)).toEqual('fizz')
});

test('put 13 should return 13', () => {
  expect(fizzbuzz(13)).toEqual(13)
});

test('put 14 should return 14', () => {
  expect(fizzbuzz(14)).toEqual(14)
});

test('put 15 should return 15', () => {
  expect(fizzbuzz(15)).toEqual('fizzbuzz')
});

console.log(fizzbuzz(1))