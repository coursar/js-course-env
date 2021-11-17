import cashback from '../lib';

// 1. Как понять какие тесты писать?
// 2. Как понять, что тестов достаточно?

// Happy path, Sad Path
// Positive/Negative

test('should calculate cashback under limit', () => {
  // (A)rrange
  const amount = 1_000;
  const expected = 30;
  // (A)ct
  const actual = cashback(amount);
  // (A)ssert
  expect(actual).toBe(expected);
});

test('should calculate cashback over limit', () => {
  // (A)rrange
  const amount = 1_000_000;
  const expected = 3000;
  // (A)ct
  const actual = cashback(amount);
  // (A)ssert
  expect(actual).toBe(expected);
});

test('should throw on NaN', () => {
  // (A)rrange
  const amount = Number.NaN;
  // (A)ct + (A)ssert
  expect(() => cashback(amount)).toThrow();
});
