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

const dominos = new Set<Domino>();

for (let i = 0; i < moneyValues.length; i++) {
  for (let j = 0; j < moneyValues.length; j++) {
    if (i <= j) dominos.add([moneyValues[i], moneyValues[j]]);
  }
}

export default dominos;