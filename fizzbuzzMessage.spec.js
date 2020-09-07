const fizzbuzz = require('./fizzbuzzMessage')

test('put 1 should return { message: 1 }', () => {
  expect(fizzbuzz(1)).toEqual({
    message: 1
  })
});

test('put 2 should return { message: 2 }', () => {
  expect(fizzbuzz(2)).toEqual({
    message: 2
  })
});

test('put 1 should return { message: \'fizz\' }', () => {
  expect(fizzbuzz(3)).toEqual({
    message: 'fizz'
  })
});