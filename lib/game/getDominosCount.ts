const combination = (n: number, k: number) => {
  if (k > n) return 0;
  if (k * 2 > n) k = n - k;
  if (k == 0) return 1;

  let result = n;

  for (let i = 2; i <= k; i += 1) {
    result *= n - i + 1;
    result /= i;
  }

  return result;
};

const getDominosCount = (moneyValuesCount: number) =>
  combination(moneyValuesCount + 1, 2);

export default getDominosCount;
