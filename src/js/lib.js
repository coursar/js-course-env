// pure functions (чистая функция)
const cashback = function (amount) {
  const percent = 3;
  const result = Math.floor((amount * percent) / 100);
  const limit = 3_000;
  if (result > limit) {
    return limit;
  }
  return result;
};

export default cashback;
