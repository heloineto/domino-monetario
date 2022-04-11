const moneyValues: MoneyValue[] = [
  '200',
  '100',
  '50',
  '20',
  '10',
  '5',
  '2',
  '1',
  '0.5',
  '0.25',
  '0.1',
  '0.05',
  '0',
];

const pieces = moneyValues
  .map((firstValue) => moneyValues.map((secondValue) => [firstValue, secondValue]))
  .flat();

export default pieces;
