// pure functions (чистая функция)
const cashback = function (amount) {
  if (typeof amount !== 'number') {
    throw new Error('amount should be a number');
  }

  if (Number.isNaN(amount)) {
    throw new Error('amount should not be NaN');
  }

  if (amount < 0) {
    throw new Error('amount should be greater than 0');
  }

  if (amount > 1_000_000) {
    throw new Error('amount should be lower than 0');
  }

  // 0 - 1_000_000
  const percent = 3;
  const result = Math.floor((amount * percent) / 100);
  const limit = 3_000;
  if (result > limit) {
    return limit;
  }
  return result;
};

export default cashback;
