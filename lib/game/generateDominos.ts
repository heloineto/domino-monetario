const generateDominos = (moneyValues: MoneyValue[]) => {
  const dominos: Domino[] = [];

  for (let i = 0; i < moneyValues.length; i++) {
    for (let j = i; j < moneyValues.length; j++) {
      dominos.push([moneyValues[i], moneyValues[j]]);
    }
  }

  return dominos;
};

export default generateDominos;
