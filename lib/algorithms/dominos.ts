export const moneyValues: MoneyValue[] = [
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

const dominos: Domino[] = [];

for (let i = 0; i < moneyValues.length; i++) {
  for (let j = i; j < moneyValues.length; j++) {
    dominos.push([moneyValues[i], moneyValues[j]]);
  }
}

Object.freeze(dominos);

export default dominos;
